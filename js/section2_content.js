export default {
  name: "section2_content",
  props: {
    msg: String,
  },
  data() {
    return {
      currentValue: -0,
      numMin: 0
    };
  },

  mounted() {
    let scrollPage = document.querySelector('.minRange').getBoundingClientRect().width;
    return this.numMin = "-" + scrollPage
  },
  methods: {


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