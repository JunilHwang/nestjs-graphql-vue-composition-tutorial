import { Injectable } from '@nestjs/common'
import { User } from './user.model'
import { UserInput } from './user.input'

@Injectable()
export class UserService {
  private users: User[] = []
  private lastIdx: number = 1

  async find (idx: number): Promise<User> {
    return Promise.resolve(this.users.find(v => v.idx === idx))
  }
  async findAll (): Promise<User[]> {
    return Promise.resolve(this.users)
  }
  async create ({ id, email, name }: UserInput): Promise<User> {
    try {
      const user = new User()
      user.idx = this.lastIdx
      user.id = id
      user.email = email
      user.name = name
      user.createdAt = new Date()
      this.lastIdx += 1
      this.users.push(user)
      return Promise.resolve(user)
    } catch (e) {
      this.lastIdx -= 1
    }
  }
  async remove (idx: number): Promise<Boolean> {
    const k = this.users.findIndex(v => v.idx === idx)
    if (k === -1) return Promise.resolve(false)

    this.users.splice(k, 1)
    return Promise.resolve(true)
  }
}