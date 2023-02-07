<template>
  <div class="apiDemo">
    <ul>
      <li v-for="index in demoList" :key="index.id">
        {{ index.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import demo from "@/api/module/demo.js";

onMounted(() => {
  getDemo();
});

const demoList = ref([]);
function getDemo() {
  demo.getDemoList().then((res) => {
    demoList.value = res.data;
  });
}
</script>

<style lang="less" scoped>
* {
  font-size: 12px;
}
</style>
