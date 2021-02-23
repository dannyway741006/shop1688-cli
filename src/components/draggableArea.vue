<template>
  <section id="draggableArea">
    <article>
      <div class="icon" id="square1">
        <a href="#"><img src="../../imgShop1688/icon/choose.png" /></a>
      </div>
      <div class="icon" id="square2">
        <a href="#"><img src="../../imgShop1688/icon/join.png" /></a>
      </div>
      <div class="icon" id="square3">
        <a href="#"><img src="../../imgShop1688/icon/star.png" /></a>
      </div>
      <div class="icon" id="square4">
        <a href="#"><img src="../../imgShop1688/icon/len.png" /></a>
      </div>
    </article>
  </section>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
import gsap from "gsap";
import { Draggable } from "gsap/Draggable.js";
gsap.registerPlugin(Draggable);
// console.log(Draggable);

export default {
  name: "draggableArea",
  props: {
    msg: String,
  },
  mounted() {
    // console.log(headerRect.width);
    let draggableArea = document.querySelector("#draggableArea");
    Draggable.create("#square1", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      // radius: 15,
    });
    Draggable.create("#square2", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      // radius: 15,
    });
    Draggable.create("#square3", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      // radius: 15,
    });
    Draggable.create("#square4", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      zIndex: 500,
      // radius: 15,
    });
  },
};
</script>
