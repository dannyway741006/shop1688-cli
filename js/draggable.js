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


import VueDragResize from 'vue-drag-resize'
import DockBox from "@/components/dockBox.vue";
import SearchBox from "@/components/searchBox.vue";
export default {
  name: "draggableArea",
  components: {
    SearchBox,
    DockBox,
    VueDragResize
  },
  props: {
    msg: String,
  },
  data() {
    return {
      screenWidth: document.body.clientWidth // 這裡是給到了一個預設值 （這個很重要）
    };
  },

  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }

    let object = {
      el: '.bubble',
      duration: 5
    }
    gsap.to('.js-icon', {
      x: 0,
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      scale: 1,
      ease: "back"
    })
    gsap.to('.js-up-dock', {
      y: 0,
      duration: 2,
      opacity: 1,
      stagger: 0.3,
      scale: 1,
      ease: "back"
    })

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
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          // that.init()
          that.timer = false
        }, 400)
      }
      let test = document.querySelector('.area-two');
      console.log(test);
      test.classList.add('center');
    }
  },
  methods: {
    parallax(e) {
      let x = e.parallax ? e.parallax[0].clientX : e.clientX,
        y = e.parallax ? e.parallax[0].clientY : e.clientY;
      let w = window.innerWidth / 2;
      let h = window.innerHeight / 2;
      let l = -(x - w) / (w / 20) - 10;
      let t = -(y - h) / (h / 30) - 10;
      // console.log(y + ' | ' + h + ' | ' + t);
      gsap.to('.bubble-move', 1, {
        x: t + "%",
        y: l + "%"
      });
    }
  },
};