import { User } from '../User'

export interface Post {
  id: string
  title: string
  content: string
  writer: User
  createdAt: Date
}