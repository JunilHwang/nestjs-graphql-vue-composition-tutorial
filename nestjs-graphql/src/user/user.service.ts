import { Injectable } from '@nestjs/common'
import { User } from './user.model'
import { UserInput } from './user.input'

@Injectable()
export class UserService {
  async find (idx: number): Promise<User> {
    return Promise.resolve({} as any)
  }
  async findAll (): Promise<User[]> {
    return Promise.resolve([])
  }
  async create (userInput: UserInput): Promise<User> {
    return Promise.resolve({} as any)
  }
  async remove (idx: number): Promise<Boolean> {
    return Promise.resolve(true)
  }
}