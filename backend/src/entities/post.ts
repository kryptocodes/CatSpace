
import { ObjectType, Field, Int  } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Upvote } from "./upvote";
import { User } from "./user";
import { Comment } from "./comments"

@ObjectType()
@Entity()
export class Post extends BaseEntity {
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
  @Column()
  title!: string;

  @Field()
  @Column()
  image!: string;

  @Column()
  @Field(() => Int)
  creatorId!: number;

  @ManyToOne(() => User, (creator) => creator.posts)
  @Field(() => User)
  creator!: User;

  @OneToMany(() => Upvote, (upvote) => upvote.user)
  upvotes!: Upvote[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments!: Comment[];

}