<template>
  <section class="todoList">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input
      type="text"
      class="todo-input"
      placeholder="what needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.title }}
    </div>
    <div class="remove-item">&times;</div>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "Finish Vue Screencast",
          completed: false,
        },
        {
          id: 2,
          title: "Take Over Word",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      this.idForTodo++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-input {
  width: 100%;
  max-width: 500px;
  padding: 10px 10px;
  font-size: 10px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: 0;
  }
}
.todo-item {
  // border: 1px solid red;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>
