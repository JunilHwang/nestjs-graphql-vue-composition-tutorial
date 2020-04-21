import {Mutation, Query, Resolver} from '@nestjs/graphql'
import {User} from './user.model'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {

  constructor (private readonly userService: UserService) {}

  @Query(() => User)
  async find (idx: number): Promise<User> {
    return await this.userService.find(idx)
  }

  @Query(() => [User])
  async findAll (): Promise<User[]> {
    return await this.userService.findAll()
  }
}