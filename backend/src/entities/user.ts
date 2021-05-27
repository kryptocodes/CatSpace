import { ObjectType, Field  } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { Upvote } from "./upvote";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn() 
  updatedAt: Date;

  @Field()
  @Column({ unique: true})
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Post, (post) => post.creator)
  @Field(() => Post)
  posts!: Post[];

  @OneToMany(() => Upvote, (upvote) => upvote.user)
  upvotes!: Upvote[];

  @OneToMany(() => Upvote, (upvote) => upvote.user)
  comments!: Comment[];
}