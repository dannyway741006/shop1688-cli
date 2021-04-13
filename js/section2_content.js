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

export default {
  name: "section2_content",
  props: {
    msg: String,
  },
  data() {
    return {
      // currentValue: -0,

      scrollValue: 0,
      maxRange: 0,
      isDrag: false,
      startMouse: {
        x: 0,
        y: 0
      },
      mouse: {
        x: 0,
        y: 0
      }

    };
  },
  computed: {
    transformStyle() {
      return {
        transform: `translateX(-${this.scrollValue}px) `
      }
    },
  },
  mounted() {
    this.maxRange = this.$refs.cards.clientWidth - this.$refs.container.clientWidth
    let webScrollPage = document.querySelector('.web_scroll_page')



    Draggable.create("#inSide_page", {
      bounds: webScrollPage,
      dragClickables: true,
      type: 'x',
      edgeResistance: 0.5,
      throwProps: true,
      onPress: function ({
        clientX

      }) {

        this.isDrag = true
        this.x = clientX

        console.log(parseInt(this.scrollValue));
        this.tempScrollValue = parseInt(this.scrollValue)
      },
      onDrag: function ({
        clientX
      }) {
        console.log(clientX);
        this.x = clientX

        if (this.isDrag) {
          const diffX = this.startMouse.x - this.mouse.x
          // const diffY = this.startMouse.y - this.mouse.y
          this.scrollValue = Math.max(Math.min(this.tempScrollValue + diffX, this.maxRange), 0)
          // console.log(this.scrollValue, '轉字串')
        }
      }
      // radius: 15,
    });


  },
  methods: {
    mousedown({
      clientX,
      clientY
    }) {
      console.log(clientX, 'mousedown clientX')
      this.isDrag = true
      this.startMouse.x = clientX
      this.startMouse.y = clientY
      console.log(parseInt(this.scrollValue));
      this.tempScrollValue = parseInt(this.scrollValue)
    },
    mousemove({
      clientX,
      clientY
    }) {
      console.log(clientX);
      this.mouse.x = clientX
      this.mouse.y = clientY
      if (this.isDrag) {
        const diffX = this.startMouse.x - this.mouse.x
        // const diffY = this.startMouse.y - this.mouse.y
        this.scrollValue = Math.max(Math.min(this.tempScrollValue + diffX, this.maxRange), 0)
        // console.log(this.scrollValue, '轉字串')
      }
    },
    mouseup() {
      this.isDrag = false
    },
  },
}