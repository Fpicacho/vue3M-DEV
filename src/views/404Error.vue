<template>
  <!-- 404了捏 生活本身充满荒谬你说是吧 :) -->
  <div class="error">
    <p class="title">404</p>
    <p class="subTitle">OooooooNo!</p>
    <button @click="goHome">GO Home</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .title {
    font-size: 150px;
    font-weight: 700;
    color: #100000;
  }
  .subTitle {
    font-size: 30px;
    font-weight: 700;
    color: #100000;
    margin: 30px 0;
  }
  button {
    color: #fff;
    background: #100000;
    border: none;
    padding: 10px 20px;
  }
}
</style>
