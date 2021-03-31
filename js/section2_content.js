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
      valueNumber: 20
    };
  },
  computed: {
    total() {
      return console.log(this.valueNumber * 10)
    }
  },
  mounted() {
    // let input_range = document.querySelector('.input_range');
    // console.log(this.valueNumber)

    // let drag_scrollbar_range = document.querySelector("#drag_scrollbar_range");
    // Draggable.create("#drag_bar", {
    //   bounds: drag_scrollbar_range,
    //   dragClickables: true,
    //   type: "x",
    //   edgeResistance: 0.5,
    //   // throwProps: false,
    //   onpress: () => {
    //     drag_scrollbar_range.style.background = `#F1FFFD`;
    //   }
    //   // radius: 15,
    // });


  },
}