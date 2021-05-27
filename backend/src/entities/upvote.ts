import { Entity, BaseEntity, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity()
export class Upvote extends BaseEntity {
  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => User, (user) => user.upvotes, {
    onDelete: "CASCADE",
  })
  user!: User;

  @PrimaryColumn()
  postId!: number;

  @ManyToOne(() => Post, (post) => post.upvotes, {
    onDelete: "CASCADE",
  })
  post!: Post;

  @Column()
  isUpvote!: boolean;
}
