// import {
//   gsap
// } from 'gsap';
// import {
//   CSSPlugin
// } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin);
// import {
//   Draggable
// } from "gsap/Draggable.js";
// gsap.registerPlugin(Draggable);


export default {
  name: "DockBox",
  props: {
    msg: String,
  },

  data() {
    return {

    };
  },

  methods: {
    add1() {
      this.$refs.child2.setAttribute("class", "active");
    },
    removeAdd1() {
      this.$refs.child2.setAttribute("class", "removeactive");
    },
    add2() {
      this.$refs.child1.setAttribute("class", "active");
      this.$refs.child3.setAttribute("class", "active");
    },
    removeAdd2() {
      this.$refs.child1.setAttribute("class", "removeactive");
      this.$refs.child3.setAttribute("class", "removeactive");
    },
    add3() {
      this.$refs.child2.setAttribute("class", "active");
      this.$refs.child4.setAttribute("class", "active");
    },
    removeAdd3() {
      this.$refs.child2.setAttribute("class", "removeactive");
      this.$refs.child4.setAttribute("class", "removeactive");
    },
    add4() {
      this.$refs.child3.setAttribute("class", "active");
      this.$refs.child5.setAttribute("class", "active");
    },
    removeAdd4() {
      this.$refs.child3.setAttribute("class", "removeactive");
      this.$refs.child5.setAttribute("class", "removeactive");
    },
    add5() {
      this.$refs.child4.setAttribute("class", "active");
      this.$refs.child6.setAttribute("class", "active");
    },
    removeAdd5() {
      this.$refs.child4.setAttribute("class", "removeactive");
      this.$refs.child6.setAttribute("class", "removeactive");
    },
    add6() {
      this.$refs.child5.setAttribute("class", "active");
      this.$refs.child7.setAttribute("class", "active");
    },
    removeAdd6() {
      this.$refs.child5.setAttribute("class", "removeactive");
      this.$refs.child7.setAttribute("class", "removeactive");
    },
    add7() {
      this.$refs.child6.setAttribute("class", "active");

    },
    removeAdd7() {
      this.$refs.child6.setAttribute("class", "removeactive");
    }
  },


}