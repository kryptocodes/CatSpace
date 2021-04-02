import { Post } from "./entities/post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  user: 'postgres',
  password: 'postgres',
  dbName: "cats",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];