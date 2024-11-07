<script setup lang="ts">
import { toRefs } from 'vue'
import { type Data } from '@/types'
import { useRouter } from 'vue-router'

import { useMessageStore } from '@/stores/message';

const store = useMessageStore()
const props = defineProps<{
    data: Data
    id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data } = toRefs(props)
const router = useRouter() 
const Edit = () => {
    store.updateMessage(' The data has been updated' + props.id)
  setTimeout(() => {
    store.resetMessage()
  },3000)
    router.push({ name: 'passenger-detail-view' })
}
</script>
<template>
    <p>Edit  here</p>
    <button @click="Edit">Edit</button>
</template>