import { Module, MutationAction, VuexModule } from 'vuex-module-decorators'
import { User } from 'domain/types'
import { getRandId } from '@/helper'

export const user: User = {
  id: getRandId(),
  userId: 'junil',
  name: '황준일',
  email: 'junil.h@kakao.com',
  createdAt: new Date(),
}

@Module({
  namespaced: true
})
export default class UserStore extends VuexModule {
  user: User = user
}