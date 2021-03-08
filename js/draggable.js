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



import DockBox from "@/components/dockBox.vue";
import SearchBox from "@/components/searchBox.vue";
export default {
  name: "draggableArea",
  components: {
    SearchBox,
    DockBox,

  },
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: true,
    };
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    this.lastWidth = this.$refs.watchResize.clientWidth;
    console.log(this.lastWidth);
    window.addEventListener('resize', this.handleResize);

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

  methods: {

    handleResize() {
      if (this.$refs.watchResize.clientWidth !== this.lastWidth) {
        let test = document.querySelector('.js-area-two');
        console.log(test);
        test.classList.add('center');
      }

    },
    controlClose() {
      this.isActive = false;
      const icon = document.querySelector('.dock-search');
      const windowItem = document.querySelector('.js-area-two')
      const iconRect = icon.getBoundingClientRect()
      windowItem.style.transform = `translate(-50%, -50%) scale(0.3)`
      windowItem.style.top = `${iconRect.top + iconRect.height / 2}px`
      windowItem.style.left = `${iconRect.left + iconRect.width / 2}px`
      windowItem.style.opacity = `1`
    },
    controlOpen() {
      // const icon = document.querySelector('.dock-search');
      const windowItem = document.querySelector('.js-area-two')
      const areaTwo = document.querySelector('.area-two')
      // const iconRect = icon.getBoundingClientRect()
      windowItem.style.transform = `translate(-50%, -50%) scale(1)`
      windowItem.style.top = `${50}%`
      windowItem.style.left = `${50}%`
      windowItem.style.opacity = `1`

      areaTwo.style.transform = `translate(-50%, -50%)`

    },


    // closeWeb() {
    //   const icon = document.querySelector('.shop-web')
    //   const squareIcon = document.querySelector('.square-shop-web')
    //   const windowItem = document.querySelector('.shop1688-web')
    //   const close = document.querySelector('.touch-close')
    //   const iconRect = icon.getBoundingClientRect()
    //   const squareIconRect = squareIcon.getBoundingClientRect()
    //   const windowRect = windowItem.getBoundingClientRect()
    //   const header = document.querySelector('.header');
    //   const headerRect = header.getBoundingClientRect();
    //   if (headerRect.width > 770) {
    //     windowItem.style.transform = `translate(-50%, -50%) scale(${0})`
    //     windowItem.style.top = `${iconRect.top + iconRect.height / 2}px`
    //     windowItem.style.left = `${iconRect.left + iconRect.width / 2}px`
    //     windowItem.style.opacity = `0`
    //   } else {
    //     windowItem.style.transform = `translate(-50%, -50%) scale(${0})`
    //     windowItem.style.top = `${squareIconRect.top + squareIconRect.height / 2}px`
    //     windowItem.style.left = `${squareIconRect.left + squareIconRect.width / 2}px`
    //     windowItem.style.opacity = `0`
    //   }

    // },
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
