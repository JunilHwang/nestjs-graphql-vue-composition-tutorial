import { SetupContext } from '@vue/composition-api'

export const useStore = ({ root: { $store: { state, dispatch, commit } } }: SetupContext) => {
  return { state, dispatch, commit }
}

export const useRouter = ({ root: { $router: router, $route: route } }: SetupContext) => {
  return { router, route }
}

export const useEUI = ({ root: { $message, $notify } }: SetupContext) => {
  return { $message, $notify }
}