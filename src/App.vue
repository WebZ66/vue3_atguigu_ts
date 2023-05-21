<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped lang="scss">
h1 div {
  color: $base-color;
}
</style>
