<template>
  <svg :style="{ width: width + 'px', height: height + 'px' }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
interface IProps {
  prefix?: string
  name?: string
  color?: string
  width?: number
  height?: number
}
const props = withDefaults(defineProps<IProps>(), {
  prefix: '#icon-',
  name: '',
  color: '#ccc',
  width: 16,
  height: 16
})
</script>

<style scoped></style>
