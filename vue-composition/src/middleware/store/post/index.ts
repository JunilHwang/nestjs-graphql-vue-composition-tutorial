import { Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import { Post, PostVO } from 'domain/types'
import { getRandId } from '@/helper'
import { user as writer } from '../user'

const postList: Post[] = [
  {
    id: getRandId(),
    title: 'test',
    content: 'test\ncontent',
    createdAt: new Date(),
    writer
  }
]

@Module({
  namespaced: true
})
export default class UserStore extends VuexModule {

  postList: Post[] = postList

  @MutationAction
  async ADD_POST (postDetail: PostVO) {
    postList.push({
      ...postDetail,
      id: getRandId(),
      createdAt: new Date(),
      writer
    })
    return { postList }
  }

  @MutationAction
  async DELETE_POST ({ id }: Post) {
    return { postList: postList.filter(v => v.id !== id) }
  }
}