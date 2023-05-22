<template>
  <div>
    HelloWorld
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const name = ref<string>("hello");
const changeName = () => {
  name.value = "zds";
};
defineExpose({
  name,
  changeName,
});
</script>

<style scoped></style>
