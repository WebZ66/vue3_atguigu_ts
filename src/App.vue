<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
//设置默认的主题
document.documentElement.setAttribute('data-theme', 'light')
</script>

<style scoped lang="scss"></style>
