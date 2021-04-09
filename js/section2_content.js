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
      currentValue: -0,
      numMin: 0,

    };
  },

  mounted() {

    let scrollPage = document.querySelector('.minRange').getBoundingClientRect().width;
    return this.numMin = "-" + scrollPage;

  },
  methods: {
    dropMove() {
      const slider = document.querySelector('.web_scroll_page');
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        // slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        // slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        // slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);

      });
    },

    add() {
      this.currentValue = parseInt(this.currentValue)
      let scrollPage = document.querySelector('.minRange').getBoundingClientRect().width;
      if ((this.currentValue - this.numMin) > scrollPage / 10) {
        return this.currentValue -= scrollPage / 10
      } else {
        return this.currentValue = this.numMin
      }
    },
    noAdd() {
      this.currentValue = parseInt(this.currentValue)
      let scrollPage = document.querySelector('.minRange').getBoundingClientRect().width;
      if (this.currentValue) {
        if (this.currentValue < -(scrollPage / 10)) {
          return this.currentValue += scrollPage / 10
        } else {
          return this.currentValue = 0
        }
      }
    },
  }
}