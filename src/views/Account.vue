<template>
  <main>
    <TodoList msg="Welcome to Your Vue.js App" />
  </main>
</template>

<script>
import TodoList from "@/components/todoList.vue";
export default {
  name: "Account",
  components: {
    TodoList,
  },
};
</script>
