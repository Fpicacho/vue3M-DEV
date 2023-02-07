<template>
  <div class="index">
    <p>首页</p>
    <Rate v-model="reatNub" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Rate } from "vant";
const reatNub = ref(0);
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
