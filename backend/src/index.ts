import 'reflect-metadata'
import { __prod__ } from "./constants"
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from'type-graphql'
import { PostResolver } from "./resolvers/post"
import { UserResolver } from './resolvers/user'
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { MyContext } from './types'
import cors from 'cors'
import { createConnection } from 'typeorm'
import path from 'path'
import { Post } from './entities/post'
import { User } from './entities/user'

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'cats',
        username: 'postgres',
        password: 'postgres',
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [Post,User]
    })

    const app = express()

    let RedisStore = (connectRedis)(session)
    let redisClient = redis.createClient()

    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    )

    app.use(
    session({
        name: 'qid',

        store: new RedisStore({ client: redisClient,
            disableTouch:true
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            sameSite: 'lax',
            secure: __prod__
        },
        saveUninitialized: false,
        secret: 'keyboard cat',
        resave: false,
    })
    )
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PostResolver,UserResolver],
            validate: false,
        }),
        context: ({ req,res }):MyContext => ({ req, res  })
    })

    apolloServer.applyMiddleware({ app, cors: false })

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    })
}



main().catch(err => {
    console.error(err)
})