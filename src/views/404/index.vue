<template>
  <div>
    <button @click="change">点击</button>
    <div class="menu"></div>
    <div class="list"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
const change = () => {
  let html = document.querySelector('html')
  html?.setAttribute('data-theme', 'dark')
}
</script>

<style lang="scss" scoped>
@import '@/style/theme.scss';
.menu {
  width: 200px;
  height: 400px;

  @include menu_back_ground;
}

.list {
  width: 100px;
  height: 100px;
  background-color: blue;
  [data-theme='dark'] & {
    background-color: red;
  }
}
</style>
