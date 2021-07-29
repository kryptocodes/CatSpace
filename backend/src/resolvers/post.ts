
import { Post } from '../entities/post'
import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root } from 'type-graphql'
import { User } from '../entities/user';
import { Upvote } from '../entities/upvote';
import { MyContext } from 'src/types';
import { getConnection } from 'typeorm';

@Resolver(Post)
export class PostResolver {    
    @FieldResolver(() => User)
    creator(@Root() post: Post) {
        return User.findOne(post.creatorId);
    }

    @FieldResolver(() => Int)
    async upvoteCount(@Root() post: Post): Promise<number> {
        const upvotes = await Upvote.find({ postId: post.id });
        return upvotes.reduce((sum, { isUpvote }) => (isUpvote ? ++sum : --sum), 0);
    }
    @Query(() => [Post])
    posts(): Promise<Post[]> {
     
      return ( getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
          .orderBy('p."createdAt"', "DESC")
      .getMany() )
    }

    @Query(() => Post,{ nullable: true }) 
    post(
        @Arg('id') id: number,
    ): Promise<Post | undefined> {
        return Post.findOne(id)
    }

    @Query(() => Boolean, { nullable: true })
  async upvoteStatus(
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean | undefined> {
    if (!req.session.userId) throw new Error("Not Logged in");

    const userId = parseInt(req.session.userId);
    if (!userId) throw new Error("Invalid user id"); 

    const post = await Post.findOne(postId);
    if (!post) throw new Error("Post not found");

    const upvote = await Upvote.findOne({ postId, userId });
    return upvote?.isUpvote;
  }

    @Mutation(() => Post) 
    async createPost(
        @Ctx() { req }: MyContext,
        @Arg('title') title: string,
        @Arg('image',() => String, { nullable: true }) image?: string,
    ): Promise<Post> {
        if (!req.session.userId) throw new Error("Not Logged in");

    return Post.create({
      title, 
      image,
      creatorId: parseInt(req.session.userId),
    }).save();
    
    }

    @Mutation(() => Post, {nullable: true}) 
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Arg('image', () => String, { nullable: true}) image: string,
    ): Promise<Post | null> {
        const post = await Post.findOne(id);
        if (!post) {
            return null;
        }
        if (typeof title !== "undefined") {
            Post.update({ id }, { title,image });
        }
        
        return post;
    }

    @Mutation(() => Boolean) 
    async deletePost(
        @Arg('id') id: number,
    ): Promise<Boolean> {
        try{
            await Post.delete({id})
        } catch {
            return false
        }
        return true;
    }

    @Mutation(() => Post)
  async upvote(
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    if (!req.session.userId) throw new Error("Not Logged in");

    const post = await Post.findOne(postId);
    if (!post) throw new Error("Post not found");

    const userId = parseInt(req.session.userId);
    if (!userId) throw new Error("Invalid user id"); //TODO: middleware

    const previousUpvote = await Upvote.findOne({ postId, userId });
    if (previousUpvote && !previousUpvote.isUpvote) {
      previousUpvote.isUpvote = true;
      await previousUpvote.save();
    } else {
      await Upvote.create({ postId, userId, isUpvote: true }).save();
    }

    return post;
    }
    
     @Mutation(() => Post)
  async downvote(
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    if (!req.session.userId) throw new Error("Not Logged in");

    const post = await Post.findOne(postId);
    if (!post) throw new Error("Post not found");

    const userId = parseInt(req.session.userId);
    if (!userId) throw new Error("Invalid user id"); //TODO: middleware

    const previousUpvote = await Upvote.findOne({ postId, userId });
    if (previousUpvote && previousUpvote.isUpvote) {
      previousUpvote.isUpvote = false;
      await previousUpvote.save();
    } else {
      await Upvote.create({ postId, userId, isUpvote: false }).save();
    }

    return post;
  }


}

