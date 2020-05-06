import { Action, Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import { Post, PostVO, User } from 'domain/types'

const postList: Post[] = []
const user: User = {
  id: `${Math.random() * 10000}`,
  userId: 'junil',
  name: '황준일',
  email: 'junil.h@kakao.com',
  createdAt: new Date(),
}

@Module({
  namespaced: true
})
export default class UserStore extends VuexModule {

  postList: Post[] = postList

  @MutationAction
  async ADD_POST (postDetail: PostVO) {
    postList.push({
      ...postDetail,
      id: `${Math.random() * 10000}`,
      writer: user,
      createdAt: new Date()
    })
    return { postList }
  }
}