// 一个demo 用于演示如何使用pinia

import { defineStore } from "pinia";
import { ref, reactive } from "vue";

// 定义一个store
export const useDemoStore = defineStore(
  "Demo",
  () => {
    // 对标vuex中的state选项
    const NUB = ref(0);
    // 这样子可能会更像vue中的data用法:)
    const DATA = reactive({
      name: "TodoList",
      todoList: [],
    });
    /* ---------------------------- **/
    // 对标vuex中的getters选项

    /* ---------------------------- **/

    // 对标vuex中的action选项
    function ADD_NUB() {
      // 注意这里的NUB是ref类型的数据要使用.value访问
      NUB.value++;
    }
    // 结合vue3的reactive使用
    function ADD_TODO(text) {
      // reactive的数据可以直接使用 但只能包装复杂对象 无法处理原始对象
      DATA.todoList.push({
        id: DATA.todoList.length,
        container: text,
      });
    }
    // 删除todo
    function DEL_TODO(id) {
      DATA.todoList = DATA.todoList.filter((item) => item.id !== id);
    }

    return { NUB, DATA, ADD_NUB, ADD_TODO, DEL_TODO };
  },
  {
    // 开启本地化存储
    persist: true,
  }
);
