<template>
  <div class="container">
    <el-table :data="list" v-if="list.length > 0">
      <el-table-column prop="id" label="ID" header-align="center" />
      <el-table-column prop="title" label="제목" header-align="center" />
      <el-table-column prop="writer.name" label="작성자" header-align="center" />
      <el-table-column prop="createdAt" label="작성일" header-align="center" />
    </el-table>
    <p v-else>
      작성된 게시물이 없습니다.
    </p>
    <div class="btnGroup">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from '@vue/composition-api'
import { Post } from 'domain/types'

const list: Ref<Post[]> = ref([ ])

export default defineComponent({
  setup () {
    return { list }
  }
})
</script>