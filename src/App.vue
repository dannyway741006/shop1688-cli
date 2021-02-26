<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Account">Account</router-link>
    </div> -->
    <!-- <router-view /> -->
    <HomeSection1 msg="Welcome to Your Vue.js App" />
  </div>
</template>
<style lang="scss">
@import "../scss/mixins/mixin";
* {
  @include domReset;
}
</style>
<script>
// @ is an alias to /src
import HomeSection1 from "@/page/home_section1.vue";

export default {
  name: "App",
  components: {
    HomeSection1
  }
};
</script>
