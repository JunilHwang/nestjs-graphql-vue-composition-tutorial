<template>
  <main>
    <h1>게시물 조회</h1>
    <el-card>
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

export default defineComponent({
  setup (props, context: SetupContext) {
    const { post } = usePostView(context)
    return { post }
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 800px;
  margin: 0 auto;
}
</style>