import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { User } from './user.model'
import { UserService } from './user.service'
import { UserInput } from './user.input'
import { PubSub } from 'apollo-server-express'

const pubSub = new PubSub()

@Resolver(() => User)
export class UserResolver {

  constructor (private readonly userService: UserService) {}

  @Query(() => User)
  async user (
    @Args('idx', { type: () => Int }) idx: number
  ): Promise<User> {
    return await this.userService.find(idx)
  }

  @Query(() => [User])
  async users (): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Mutation(() => User)
  async addUser(@Args('userInput') userInput: UserInput): Promise<User> {
    const user = await this.userService.create(userInput)
    await pubSub.publish('userAdded', { userAdded: user })
    return user
  }

  @Mutation(() => Boolean)
  async removeUser(
    @Args('idx', { type: () => Int }) idx: number
  ): Promise<Boolean> {
    return await this.userService.remove(idx);
  }

  @Subscription(() => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }

}