import {
  mapState,
  mapMutations
} from 'vuex';
export default {
  name: "SearchBox",
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
      'isMenu',
      'isSearchType',
      'isSearchCity',
      'isSearchMask'

    ]),
  },
  methods: {
    ...mapMutations([
      'isLoadingChangeTrue',
      'isControlCloseChangeTrue',
      'isMenuChange',
      'isSearchTypeChange',
      'isSearchCityChange',
      'isSearchMaskChange'

    ]),
    openCity() {
      let searchBox = document.querySelector('.searchBox');
      searchBox.style.background = `#EEEEEE`;
      this.$store.commit('isSearchCityChange');
      if (this.$store.state.isSearchType === true) {
        this.$store.commit('isSearchTypeChange');
      }
    },
    openType() {
      let searchBox = document.querySelector('.searchBox');
      searchBox.style.background = `#EEEEEE`;
      this.$store.commit('isSearchTypeChange');
      if (this.$store.state.isSearchCity === true) {
        this.$store.commit('isSearchCityChange');
      }
    }
  },
}