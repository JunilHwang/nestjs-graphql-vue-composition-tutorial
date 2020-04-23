<template>
  <main>
    <h2>게시물 작성</h2>
    <el-form :model="postDetail" @submit.native.prevent="addPost">
      <el-form-item label="제목" size="small">
        <el-input
          v-model="postDetail.title.value"
          placeholder="제목을 입력해주세요"
        />
      </el-form-item>
      <el-form-item label="내용" size="small">
        <el-input
          type="textarea"
          v-model="postDetail.content.value"
          placeholder="내용을 입력해주세요"
          rows="10"
        />
      </el-form-item>
      <el-form-item size="small" style="text-align: right;">
        <el-button type="default" @click="$router.back()">취소</el-button>
        <el-button native-type="submit" type="primary">전송</el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script lang="ts">
  import {defineComponent, reactive, SetupContext, toRefs} from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'
import { PostVO } from 'domain/types'

const useAddPost = (context: SetupContext) => {

  const postDetail: UnwrapRef<PostVO> = reactive({
    title: '',
    content: ''
  })

  const addPost = () => {
    context.root.$store.dispatch('postStore/ADD_POST', postDetail)
  }

  return { postDetail, addPost }

}

export default defineComponent({
  setup (props, context) {
    const { postDetail, addPost } = useAddPost(context)
    return {
      addPost,
      postDetail: toRefs(postDetail)
    }
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 600px;
  margin: 0 auto;
}
</style>