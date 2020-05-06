<template>
  <main>
    <el-card>
      <header slot="header">
        <h1 v-html="post.title" />
        <span v-html="dateFormat(post.createdAt)" />
      </header>
      <div>
        {{ post.content }}
      </div>
      <div style="text-align: right; margin-top: 20px">
        <el-button type="default" icon="el-icon-s-fold" size="mini">목록</el-button>
        <el-button type="primary" icon="el-icon-edit" size="mini">수정</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini">삭제</el-button>
      </div>
    </el-card>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, SetupContext } from '@vue/composition-api'
import { useRouter, useStore } from '@/uses'
import { Post } from 'domain/types'

const usePostView = (context: SetupContext) => {
  const { state: { postStore } } = useStore(context)
  const { route: { params: { id } } } = useRouter(context)
  const post: Ref<Post> = ref(postStore.postList.find((v: Post) => v.id === id))
  return { post }
}

const moment = require('moment')
const dateFormat = (v: Date) => moment(v).format('YYYY-MM-DD HH:mm')

export default defineComponent({
  setup (props, context: SetupContext) {
    const { post } = usePostView(context)
    return { post, dateFormat }
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 800px;
  margin: 0 auto;
}
</style>