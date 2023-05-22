<template>
  <div class="logo-container">
    <SvgIcon :name="'vue'" :width="30" :height="30"></SvgIcon>
    hello
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref, reactive } from 'vue'
</script>

<style scoped>
.logo-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
