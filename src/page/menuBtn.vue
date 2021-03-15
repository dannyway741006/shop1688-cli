<template>
  <div class="out">
    <div id="square7" class="rwd-menu-btn" @click.stop="menuBtn"></div>
  </div>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);
import { mapState, mapMutations } from "vuex";
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
    Draggable.create("#square7", {
      bounds: draggableAreall,
      dragClickables: true,
      type: "x,y",
      edgeResistance: 0.5,
      throwProps: true,

      onClick: () => {
        // this.menuBtn();
        this.menuBtn();
        console.log("clicktest");
      },
      // radius: 15,
    });
  },
  computed: {
    ...mapState(["isLoading", "isControlClose", "isMenu"]),
  },
  methods: {
    ...mapMutations([
      "isLoadingChangeTrue",
      "isControlCloseChangeTrue",
      "isMenuChange",
    ]),
    menuBtn() {
      this.$store.commit("isMenuChange");

      console.log(this.$store.state.isMenu);
    },
  },
};
</script>
