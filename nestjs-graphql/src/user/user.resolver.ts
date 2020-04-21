import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './user.model'
import { UserService } from './user.service'
import { UserArgs } from './user.args'
import { UserInput } from './user.input'
import { PubSub } from 'apollo-server-express'

const pubSub = new PubSub()

@Resolver(() => User)
export class UserResolver {

  constructor (private readonly userService: UserService) {}

  @Query(() => User)
  async user (@Args('idx') idx: number): Promise<User> {
    return await this.userService.find(idx)
  }

  @Query(() => [User])
  async users (): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Mutation()
  async addUser(@Args('userInput') userInput: UserInput): Promise<User> {
    const user = await this.userService.create(userInput)
    await pubSub.publish('userAdded', { userAdded: user })
    return user
  }

  @Mutation(returns => Boolean)
  async removeUser(@Args('idx') idx: number) {
    return this.userService.remove(idx);
  }

  @Subscription(returns => Recipe)
  recipeAdded() {
    return pubSub.asyncIterator('recipeAdded');
  }

}