<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Account">Account</router-link>
    </div> -->
    <!-- <router-view /> -->

    <HomeSection1 />
    <HomeSection2 />
    <MenuBtn />
    <div class="boxtwoo"></div>
  </div>
</template>
<style lang="scss">
@import "../scss/mixins/mixin";
* {
  @include domReset;
}
.boxtwoo {
  width: 100%;
  height: 100vh;
  // border: 2px solid gold;
}
</style>
<script src="../js/app.js">
// @ is an alias to /src
</script>
