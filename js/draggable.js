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
import {
  mapState,
  mapMutations
} from 'vuex';


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
      controlSmall: false,
    };
  },

  mounted() {

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
      edgeResistance: 0.5,
      throwProps: true
      // radius: 15,
    });
    Draggable.create("#square2", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      edgeResistance: 0.5,
      throwProps: true
      // radius: 15,
    });
    Draggable.create("#square3", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      edgeResistance: 0.5,
      throwProps: true
      // radius: 15,
    });
    Draggable.create("#square4", {
      bounds: draggableArea,
      dragClickables: true,
      type: "x,y",
      zIndex: 500,
      edgeResistance: 0.5,
      throwProps: true
      // radius: 15,
    });

    const Area = document.querySelector('#draggableArea');
    const headerRect = Area.getBoundingClientRect();
    if (headerRect.width >= 512) {
      Draggable.create("#square5", {
        bounds: draggableArea,
        dragClickables: false,
        type: "x,y",
        zIndex: 500,
        edgeResistance: 0.5,
        throwProps: true
        // radius: 15,
      });
    }
  },

  computed: {
    ...mapState([
      'isLoading',
      'logoSectionMask'
    ]),

  },

  methods: {
    ...mapMutations([
      'isLoadingChangeTrue',

    ]),

    controlBig() {

      console.log("asfdf");
      if (this.$store.state.isLoading === false) {
        this.$store.commit('isLoadingChangeTrue');
      } else {
        this.$store.commit('isLoadingChangeTrue');
        const areaTwo = document.querySelector('.area-two');
        areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
      }
    },
    Small() {
      console.log("click")
      const imgScale = document.querySelector('.img-scale')
      const controlType = document.querySelector('.control-type')
      const windowItem = document.querySelector('.area-two-outline');
      // const small = document.querySelector('.control-type');
      const smallRect = controlType.getBoundingClientRect()
      const areaTwo = document.querySelector('.area-two');
      windowItem.style.transform = `translate(-56%, -58%) scale(${0})`
      windowItem.style.top = `${smallRect.top + smallRect.height /2}px`
      windowItem.style.left = `${smallRect.left + smallRect.width / 2}px`
      areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
      areaTwo.style.top = `${smallRect.top + smallRect.height / 2}px`
      areaTwo.style.left = `${smallRect.left + smallRect.width / 2}px`
      controlType.style.width = `${100}%`
      windowItem.style.opacity = `1`
      imgScale.style.transform = ` scale(${1})`
      controlType.style.transform = ` scale(${1})`
    },
    controlClose() {
      const windowItem = document.querySelector('.area-two-outline');
      const icon = document.querySelector('.dock-search');
      const iconRect = icon.getBoundingClientRect()
      const areaTwo = document.querySelector('.area-two');
      windowItem.style.transform = `translate(-50%, -50%) scale(${0})`
      windowItem.style.top = `${iconRect.top + iconRect.height / 2}px`
      windowItem.style.left = `${iconRect.left + iconRect.width / 2}px`
      areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
      areaTwo.style.top = `${iconRect.top + iconRect.height / 2}px`
      areaTwo.style.left = `${iconRect.left + iconRect.width / 2}px`
      windowItem.style.opacity = `0`

    },
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