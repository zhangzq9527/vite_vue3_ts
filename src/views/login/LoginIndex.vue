<template>
  <div>
    {{ userStore.name }}
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../../store/index'
const userStore = useUserStore()
console.log(sessionStorage)
</script>
