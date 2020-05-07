<template>
  <main>
    <h2>게시물 목록</h2>
    <el-table :data="postList" v-if="postList.length > 0">
      <el-table-column prop="id" label="ID" align="center" />
      <el-table-column label="제목" header-align="center">
        <template slot-scope="scope">
          <el-link
            :href="`/view/${scope.row.id}`"
            @click.native.prevent="$router.push(`/view/${scope.row.id}`)"
            v-html="scope.row.title"
          />
        </template>
      </el-table-column>
      <el-table-column prop="writer.name" label="작성자" align="center" />
      <el-table-column label="작성일" align="center" :formatter="dateFormat" />
    </el-table>
    <p v-else>
      작성된 게시물이 없습니다.
    </p>
    <div style="margin-top: 20px">
      <el-button type="primary" size="mini" @click.native="$router.push('/write')">글작성</el-button>
    </div>
  </main>
</template>

<script lang="ts">
  import {computed, defineComponent, Ref, ref, SetupContext} from '@vue/composition-api'
import { Post } from 'domain/types'
import { useStore } from '@/uses'
const moment = require('moment')

const usePostList = (context: SetupContext) => {
  const { state: { postStore } } = useStore(context)
  const postList = computed(() => postStore.postList)
  return { postList }
}

const dateFormat = ({ createdAt }: Post) => moment(createdAt).format('YYYY-MM-DD')

export default defineComponent({
  setup (props, context: SetupContext) {
    return { ...usePostList(context), dateFormat }
  }
})
</script>