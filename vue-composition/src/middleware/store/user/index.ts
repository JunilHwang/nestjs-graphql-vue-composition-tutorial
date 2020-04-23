import {Module, MutationAction, VuexModule} from 'vuex-module-decorators'
import { User } from 'domain/types'

@Module({
  namespaced: true
})
export default class UserStore extends VuexModule {
  user!: User
}