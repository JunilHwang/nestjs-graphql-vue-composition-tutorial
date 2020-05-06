import { Action, Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import { Post, PostVO, User } from 'domain/types'

const getRandId = () => `${~~(Math.random() * 10000)}`

const user: User = {
  id: getRandId(),
  userId: 'junil',
  name: '황준일',
  email: 'junil.h@kakao.com',
  createdAt: new Date(),
}

const postList: Post[] = [
  {
    id: getRandId(),
    title: 'test',
    content: 'test content',
    writer: user,
    createdAt: new Date()
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
      writer: user,
      createdAt: new Date()
    })
    return { postList }
  }
}