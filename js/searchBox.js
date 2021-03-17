import {
  mapState,
  mapMutations
} from 'vuex';

import {
  db
} from '../js/firebase';
const documentPath = 'shop1688web/aom20190530009'
export default {
  name: "SearchBox",
  props: {
    msg: String,
  },
  data() {
    return {
      firebaseData: null,
    };
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath)
    }
  },
  computed: {
    ...mapState([
      'isLoading',
      'isControlClose',
      'isMenu',
      'isSearchType',
      'isSearchCity',
      'isSearchMask',
      'input',
      'newTypeData',
      'typeData',
      'cityData',
      'icon'
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

    typeMenu() {
      return this.$store.state.typeData;
    },
    cityMenu() {
      return this.$store.state.cityData;
    },

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