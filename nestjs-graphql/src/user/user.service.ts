import {Injectable} from "@nestjs/common";
import { User } from './user.model'

@Injectable()
export class UserService {
  async find (idx: number): Promise<User> {
    return Promise.resolve({} as any)
  }
  async findAll (): Promise<User[]> {
    return Promise.resolve([])
  }
  async create (userDetail: User): Promise<void> {}
  async update (userDetail: User): Promise<void> {}
  async delete (idx: number): Promise<void> {}
}