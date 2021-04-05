
export default {
  name: "section2_content",
  props: {
    msg: String,
  },
  data() {
    return {
      currentValue: 0
    };
  },
  methods: {
    add(num) {
      if (this.currentValue < 600) {
        return this.currentValue += num
      }
    },
    noAdd(number) {

      if (this.currentValue > 0) {
        return this.currentValue -= number
      }
    },
  }


}
