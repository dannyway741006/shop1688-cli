import {
  mapState,
  mapMutations
} from 'vuex';

export default {
  name: "DockBox",
  props: {
    msg: String,
  },

  data() {
    return {

    };
  },
  computed: {
    ...mapState([
      'isLoading',
    ]),

  },
  methods: {
    ...mapMutations([
      'isLoadingChangeTrue',

    ]),

    controlOpen() {
      // this.$store.commit('isLoadingChangeFalse')
      console.log(this.$store.state.isLoading);
      if (this.$store.state.isLoading === true) {
        const imgScale = document.querySelector('.img-scale')
        const controlType = document.querySelector('.control-type')
        const windowItem = document.querySelector('.area-two-outline');
        const areaTwo = document.querySelector('.area-two');
        windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
        windowItem.style.top = `${0}px`
        windowItem.style.left = `${50}%`
        areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
        windowItem.style.opacity = `1`
        controlType.style.width = `${0}%`
        imgScale.style.transform = ` scale(${0})`
      } else {
        const Area = document.querySelector('#draggableArea');
        const headerRect = Area.getBoundingClientRect();
        if (headerRect.width >= 512) {
          const imgScale = document.querySelector('.img-scale')
          const controlType = document.querySelector('.control-type')
          const windowItem = document.querySelector('.area-two-outline');
          const areaTwo = document.querySelector('.area-two');
          windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
          windowItem.style.top = `${0}px`
          windowItem.style.left = `${50}%`
          areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
          windowItem.style.opacity = `1`
          controlType.style.width = `${0}%`
          imgScale.style.transform = ` scale(${0})`
        } else {
          const windowItem = document.querySelector('.area-two-outline');
          const areaTwo = document.querySelector('.area-two');
          windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
          windowItem.style.top = `${49}px`
          windowItem.style.left = `${50}%`
          areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
          windowItem.style.opacity = `1`
        }
      }
    },
    controlSmallOpen() {
      if (this.$store.state.isLoading === true) {
        const imgScale = document.querySelector('.img-scale')
        const controlType = document.querySelector('.control-type')
        const windowItem = document.querySelector('.area-two-outline');
        const areaTwo = document.querySelector('.area-two');
        windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
        windowItem.style.top = `${0}px`
        windowItem.style.left = `${50}%`
        windowItem.style.opacity = `1`
        areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
        controlType.style.width = `${0}%`
        imgScale.style.transform = ` scale(${0})`
        controlType.style.transform = ` scale(${0})`
      } else {
        const Area = document.querySelector('#draggableArea');
        const headerRect = Area.getBoundingClientRect();
        if (headerRect.width >= 512) {
          const imgScale = document.querySelector('.img-scale')
          const controlType = document.querySelector('.control-type')
          const windowItem = document.querySelector('.area-two-outline');
          const areaTwo = document.querySelector('.area-two');
          windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
          windowItem.style.top = `${0}px`
          windowItem.style.left = `${50}%`
          windowItem.style.opacity = `1`
          areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
          controlType.style.width = `${0}%`
          imgScale.style.transform = ` scale(${0})`
          controlType.style.transform = ` scale(${0})`
          controlType.style.overflow = `hidden`
        } else {
          const windowItem = document.querySelector('.area-two-outline');
          const areaTwo = document.querySelector('.area-two');
          windowItem.style.transform = `translate(-50%, 0%) scale(${1})`
          windowItem.style.top = `${49}px`
          windowItem.style.left = `${50}%`
          windowItem.style.opacity = `1`
          areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
        }
      }
    },
    add1() {
      this.$refs.child2.setAttribute("class", "active");
    },
    removeAdd1() {
      this.$refs.child2.setAttribute("class", "removeactive");
    },
    add2() {
      this.$refs.child1.setAttribute("class", "active");
      this.$refs.child3.setAttribute("class", "active");
    },
    removeAdd2() {
      this.$refs.child1.setAttribute("class", "removeactive");
      this.$refs.child3.setAttribute("class", "removeactive");
    },
    add3() {
      this.$refs.child2.setAttribute("class", "active");
      this.$refs.child4.setAttribute("class", "active");
    },
    removeAdd3() {
      this.$refs.child2.setAttribute("class", "removeactive");
      this.$refs.child4.setAttribute("class", "removeactive");
    },
    add4() {
      this.$refs.child3.setAttribute("class", "active");
      this.$refs.child5.setAttribute("class", "active");
    },
    removeAdd4() {
      this.$refs.child3.setAttribute("class", "removeactive");
      this.$refs.child5.setAttribute("class", "removeactive");
    },
    add5() {
      this.$refs.child4.setAttribute("class", "active");
      this.$refs.child6.setAttribute("class", "active");
    },
    removeAdd5() {
      this.$refs.child4.setAttribute("class", "removeactive");
      this.$refs.child6.setAttribute("class", "removeactive");
    },
    add6() {
      this.$refs.child5.setAttribute("class", "active");
      this.$refs.child7.setAttribute("class", "active");
    },
    removeAdd6() {
      this.$refs.child5.setAttribute("class", "removeactive");
      this.$refs.child7.setAttribute("class", "removeactive");
    },
    add7() {
      this.$refs.child6.setAttribute("class", "active");

    },
    removeAdd7() {
      this.$refs.child6.setAttribute("class", "removeactive");
    }
  },


}