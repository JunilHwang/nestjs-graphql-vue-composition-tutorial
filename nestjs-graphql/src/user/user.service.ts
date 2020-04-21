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
  async update (userDetail: User): Promise<void> {}
  async remove (idx: number): Promise<boolean> {
    return Promise.resolve(true)
  }
}