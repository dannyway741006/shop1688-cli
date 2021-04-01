import {
  gsap
} from 'gsap';
// import {
//   TimelineMax
// } from 'gsap'
import {
  TweenMax,
  TimelineMax
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

    };
  },

  mounted() {
    // create props
    let target2 = document.getElementById("target2");
    let knob2 = document.getElementById("knob2");
    let knob2Rect = knob2.getBoundingClientRect();
    let volumeBar = document.getElementById("volume-bar");
    let volRect = volumeBar.getBoundingClientRect();
    let range2 = document.getElementById("range2");
    var movebox = document.querySelector("#movebox");
    var resume1 = document.querySelector("#resume1");
    // create volume controller with draggable
    Draggable.create(knob2, {
      type: "x",
      trigger: "#volume-bar",
      bounds: "#volume-bar",
      edgeResistance: 1,
      lockAxis: true,
      cursor: "pointer",
      onDrag: updateRange,
      onPress: updatePosition,
      onClick: updateRange,

    });

    function updateRange() {

      // knobRect = knob.getBoundingClientRect();
      let volRect = volumeBar.getBoundingClientRect();
      let knob2Rect = knob2.getBoundingClientRect();

      t2.progress(this.x / (volRect.width - knob2Rect.width));

      TweenMax.set(range2, {
        width: knob2Rect.left + knob2Rect.width - volRect.left,

      });

    }

    function updatePosition() {

      knob2Rect = knob2.getBoundingClientRect();
      volRect = volumeBar.getBoundingClientRect();

      TweenMax.set(knob2, {
        x: this.pointerX - volRect.left - knob2Rect.width / 2
      });
      TweenMax.set(range2, {
        width: knob2Rect.left + knob2Rect.width - volRect.left
      });
      t2.progress(this.x / (volRect.width - knob2Rect.width));
      this.update;
    }

    //timeline
    const t2 = new TimelineMax({
      paused: true,

    });
    t2.to(target2, {
      autoAlpha: 1,
      x: 300,
      backgroundColor: "#FF00FF",
      // ease: Linear.easeNone
    });
    movebox.onclick = () => {
      t2.play();
    }
    resume1.onclick = () => {
      t2.reverse();
    }
  },

}