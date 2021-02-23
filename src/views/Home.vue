<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="hometest"><p>test Word</p></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
