import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Post, PostVO } from 'domain/types'
import { getRandId } from '@/helper'
import { user as writer } from '../user'

@Module({ namespaced: true })
export default class UserStore extends VuexModule {

  postList: Post[] = [{
      id: getRandId(),
      title: 'test',
      content: 'test\ncontent',
      createdAt: new Date(),
      writer
    }
  ]

  get posts (): Post[] {
    return this.postList
  }

  @Mutation
  SET_LIST (postList: Post[]) {
    this.postList = postList
  }

  @Action({ commit: 'SET_LIST' })
  async ADD_POST (postDetail: PostVO) {
    return [ ...this.posts, {
      ...postDetail,
      id: getRandId(),
      createdAt: new Date(),
      writer
    }]
  }

  @Action({ commit: 'SET_LIST' })
  async DELETE_POST ({ id }: Post) {
    return this.posts.filter(v => v.id !== id)
  }
}