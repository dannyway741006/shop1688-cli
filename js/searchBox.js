import {
  mapState,
  mapMutations
} from 'vuex';

import
firebase
  from 'firebase';
console.log(firebase)


const firebaseConfig = {
  apiKey: "AIzaSyAdmPOeMl_kYvy0SpuSN4jmhWgtgBgizEs",
  authDomain: "shop1688mkt.firebaseapp.com",
  databaseURL: "https://shop1688mkt.firebaseio.com",
  projectId: "shop1688mkt",
  storageBucket: "shop1688mkt.appspot.com",
  messagingSenderId: "359212500160",
  appId: "1:359212500160:web:0eee6dfb29983add"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()






export default {
  name: "SearchBox",
  props: {
    msg: String,
  },
  data() {
    return {
      firebaseData: null,
      fireItems: [],
    };
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
    fireData() {

      console.log(db.collection)
      db.collection('shop1688web')
        // .limit(246)
        .get()
        .then(querySnapshot => {
          let i = 1;
          querySnapshot.forEach(doc => {
            // console.log(i++)
            console.log(i++, doc.data().名稱);

            this.fireItems.push(doc.data());

          });
        })
    },
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
  created() {


    this.fireData();



  }
}
