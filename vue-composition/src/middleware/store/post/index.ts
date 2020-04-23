import {Action, Module, MutationAction, VuexModule} from 'vuex-module-decorators'
import { Post, PostVO } from 'domain/types'

@Module({
  namespaced: true
})
export default class UserStore extends VuexModule {

  postList!: Post[]

  @Action
  ADD_POST (postDetail: PostVO) {
    console.log(postDetail)
  }
}