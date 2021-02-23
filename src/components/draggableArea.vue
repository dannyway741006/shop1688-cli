<template>
  <section class="draggableArea">
    <article>
      <div class="icon">
        <a href="#"><img src="../../imgShop1688/icon/choose.png" /></a>
      </div>
      <div class="icon">
        <a href="#"><img src="../../imgShop1688/icon/join.png" /></a>
      </div>
      <div class="icon">
        <a href="#"><img src="../../imgShop1688/icon/star.png" /></a>
      </div>
      <div class="icon">
        <a href="#"><img src="../../imgShop1688/icon/len.png" /></a>
      </div>
    </article>
  </section>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
export default {
  name: "draggableArea",
  props: {
    msg: String,
  },
};
</script>
