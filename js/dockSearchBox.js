import {
  mapState,
  mapMutations
} from 'vuex';
export default {
  name: "DockSearchBox",
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
      'isControlClose',
      'isMenu'
    ]),
  },

  methods: {
    ...mapMutations([
      'isLoadingChangeTrue',
      'isControlCloseChangeTrue',
      'isMenuChange'

    ]),
    controlOpen() {
      console.log('dock-search-click')
      if (this.$store.state.isControlClose === true) {
        this.$store.commit('isControlCloseChangeTrue');
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
            windowItem.style.top = `${0}px`
            windowItem.style.left = `${50}%`
            areaTwo.style.transform = `translate(0%, 0%) scale(${1})`
            windowItem.style.opacity = `1`
          }
        }
      }
    },

  },
}