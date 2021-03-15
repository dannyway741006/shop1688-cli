<template>
  <div class="bbbox" id="square9"></div>
</template>
<style lang="scss">
.bbbox {
  position: fixed;
  bottom: 20%;
  right: 10px;
  width: 45px;
  max-width: 10vw;
  min-width: 35px;
  height: 45px;
  max-height: 10vw;
  min-height: 35px;
  background-color: rgba(62, 62, 62, 0.7);
  // border: 4px solid green;
  z-index: 2000;
  border-radius: 10px;

  &:hover {
    z-index: 2000 !important;
  }

  &::after {
    content: "";
    width: 50%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: "";
    width: 50%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: btnRoom;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes btnRoom {
    from {
      width: 50%;
      height: 50%;
    }

    to {
      width: 63%;
      height: 63%;
    }
  }
}
</style>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
import { Draggable } from "gsap/Draggable.js";
gsap.registerPlugin(Draggable);
export default {
  name: "test",
  props: {
    msg: String,
  },

  data() {
    return {};
  },
  mounted() {
    let draggableAreall = document.querySelector("#app");
    Draggable.create("#square9", {
      bounds: draggableAreall,
      dragClickables: true,
      type: "x,y",
      edgeResistance: 0.5,
      throwProps: true,

      onClick: () => {
        // this.menuBtn();
        console.log("clicktest");
      },
      // radius: 15,
    });
  },
};
</script>
