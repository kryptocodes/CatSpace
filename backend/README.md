# CatSpace

CatSpace is a fun project made for MINI PROJECT
Users can post pictures of cats and yeah totally about cats 

**The Cat page for the internet**

## Entities 

- [ User Schema ](src/entities/user.ts)
- [ Post Schema ](src/entities/post.ts)

## Resolvers

- [ User Resolvers ](src/resolvers/user.ts)
- [ Post Resolvers ](src/resolvers/post.ts)


## MikroORM Config

[ mikro-orm.config ](src/mikro-orm.config.ts)

```typescript
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post,User],
  user: 'process.env.USER',
  password: 'process.env.PASSWORD',
  dbName: "process.env.DBNAME",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
```

## Session

Sessions are handled using Redis

```typescript
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
        secret: 'process.env.SECRET',
        resave: false,
    })
    )
```

## Installation

We use Yarn

```bash
yarn
```

## Usage

### Setup postgresql

Create a database called ```cat```:

```
createdb -u postgres cat;
```

Run 

```bash
yarn watch 
```

in one terminal and 

```bash
yarn dev
```

in another terminal

### To make migrations

```bash
yarn create:migration
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)