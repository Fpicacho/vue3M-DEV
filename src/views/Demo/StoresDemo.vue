<template>
  <div>
    <p>Pinia简单用法</p>
    <div class="demo1">
      经典计数器应用
      <p>{{ demoStore.NUB }}</p>
      <button @click="addCounter">+1</button>
    </div>
    <div class="demo2">
      经典{{ demoStore.DATA.name }}应用
      <ul>
        <li v-for="item in demoStore.DATA.todoList" :key="item.di">
          {{ item.container }}
          <button @click="demoStore.DEL_TODO(item.id)">删除此项</button>
        </li>
      </ul>
      <div>
        <input v-model="inputContent" type="text" />
        <button @click="addTodo">加一个</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDemoStore } from "@/stores/demo.js";
const demoStore = useDemoStore();

const inputContent = ref("");

function addCounter() {
  demoStore.ADD_NUB();
}

function addTodo() {
  demoStore.ADD_TODO(inputContent.value);
}
</script>

<style lang="less" scoped>
.demo1 {
  border: 5px solid palegreen;
  padding: 10px;
}
.demo2 {
  border: 5px solid palevioletred;
  margin-top: 20px;
  padding: 10px;
}
</style>
