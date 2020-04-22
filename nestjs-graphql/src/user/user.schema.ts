import { Schema, Document } from 'mongoose'

export const UserSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  createdAt: Date
})

export const UserModel = { name: 'UserModel', schema: UserSchema }

export interface UserInterface extends Document {
  readonly userId: string
  readonly name: string
  readonly email: string
  readonly createdAt: Date
}