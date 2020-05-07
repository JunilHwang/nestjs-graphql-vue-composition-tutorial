<template>
  <main>
    <el-card>
      <header slot="header">
        <h1 v-html="post.title" />
        <span v-html="dateFormat(post.createdAt)" />
      </header>
      <div v-html="post.content.replace(/\n/gi, '<br />')" />
      <div style="text-align: right; margin-top: 20px">
        <el-button type="default" icon="el-icon-s-fold" size="mini" @click="$router.push('/')">목록</el-button>
        <template v-if="post.writer.id === user.id">
          <el-button @click="$router.push(`/update/${post.id}`)" type="primary" icon="el-icon-edit" size="mini">수정</el-button>
          <el-button @click="removing" type="danger" icon="el-icon-delete" size="mini">삭제</el-button>
        </template>
      </div>
    </el-card>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, SetupContext } from '@vue/composition-api'
import { useRouter, useStore, useEUI } from '@/uses'
import { Post, User } from 'domain/types'

const useUser = (context: SetupContext) => {
  const { state: { userStore } } = useStore(context)
  const user: Ref<User> = ref(userStore.user)

  return { user }
}

const usePost = (context: SetupContext) => {
  const { state: { postStore }, dispatch } = useStore(context)
  const { route: { params: { id } }, router } = useRouter(context)
  const post: Ref<Post> = ref(postStore.postList.find((v: Post) => v.id === id))
  const { $message } = useEUI(context)

  const removing = async () => {
    try {
      dispatch('postStore/remove', post.value)
      $message({ type: 'success', message: '포스트가 삭제되었습니다.' })
      router.push('/')
    } catch (e) {
      $message({ type: 'error', message: '오류로 인하여 포스트를 삭제할 수 없습니다.' })
    }
  }

  return { post, removing }
}

const moment = require('moment')
const dateFormat = (v: Date) => moment(v).format('YYYY-MM-DD HH:mm')

export default defineComponent({
  setup (props, context: SetupContext) {
    return {
      ...usePost(context),
      ...useUser(context),
      dateFormat
    }
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 800px;
  margin: 0 auto;
}
</style>