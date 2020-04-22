import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.model'
import { UserInput } from './user.input'
import { UserInterface, UserModel } from './user.schema'

@Injectable()
export class UserService {

  constructor (@InjectModel('UserModel') private readonly userModel: Model<UserInterface>) {}

  async find (id: string): Promise<User> {
    return await this.userModel.findById(id).exec()
  }
  async findAll (): Promise<User[]> {
    return await this.userModel.find().exec()
  }
  async create (userInput: UserInput): Promise<User> {
    const user = new this.userModel({ ...userInput, createdAt: new Date() })
    return user.save()
  }
  async remove (id: string): Promise<Boolean> {
    await this.userModel.findByIdAndRemove(id).exec()
    return true
  }
}