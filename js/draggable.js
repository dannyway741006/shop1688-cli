import {
  gsap
} from 'gsap';
import {
  CSSPlugin
} from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);
import {
  Draggable
} from "gsap/Draggable.js";
gsap.registerPlugin(Draggable);
// console.log(Draggable);
// import Vue and vue-parallax-js


import DockBox from "@/components/dockBox.vue";
import SearchBox from "@/components/searchBox.vue";
export default {
  name: "draggableArea",
  components: {
    SearchBox,
    DockBox
  },
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },

  mounted() {
    let object = {
      el: '.bubble',
      duration: 5
    }
    gsap.to('.bubble-left', {
      x: 0,
      duration: 2,
      opacity: 1,
      stagger: 0.5,
      scale: 1
    })
    gsap.to('.bubble-right', {
      x: 0,
      duration: 2,
      opacity: 1,
      stagger: 0.5,
      scale: 1
    })
    gsap.to('.bubble-bottom', {
      y: 0,
      duration: 2,
      opacity: 1,
      stagger: 0.5,
      scale: 1
    })

    gsap.to('.bubble-move', {


      delay: 2.5,
      // y: "random(-200,200)",
      opacity: 1,
      stagger: 0.2,
      scale: 1,
      ease: "back"
    })




    gsap.fromTo(object.el, object.duration, {
      opacity: 0,
      y: '+=10',
      x: 0,
      scale: 1.5,
      transformOrigin: 'center'
    }, {
      opacity: 1,
      y: '-=80',
      x: Math.PI * 4,
      modifiers: {
        x: function (x) {
          return Math.sin(parseFloat(x)) * 20 + "px";
        }
      },
      scale: 0,
      stagger: {
        each: object.duration / document.querySelectorAll(object.el).length,
        repeat: -1
      }
    });



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
    Draggable.create("#square5", {
      bounds: draggableArea,
      dragClickables: false,
      type: "x,y",
      zIndex: 500,
      // radius: 15,
    });
  },
  methods: {
    parallax(e) {
      var x = e.parallax ? e.parallax[0].clientX : e.clientX,
        y = e.parallax ? e.parallax[0].clientY : e.clientY;
      var w = window.innerWidth / 2;
      var h = window.innerHeight / 2;

      var l = -(x - w) / (w / 20) - 10;
      var t = -(y - h) / (h / 30) - 10;
      //10 / (y - (h / 2)) * 100;             
      console.log(y + ' | ' + h + ' | ' + t);

      gsap.to('.bubble-move', 1, {
        x: t + "%",
        y: l + "%"
      });

    }
  },
};