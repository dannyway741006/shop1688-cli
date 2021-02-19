<template>
  <main>
    <TodoList />
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
