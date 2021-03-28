import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isControlClose: false,
    isMenu: false,
    isSearchType: false,
    isSearchCity: false,
    isSearchMask: false,
    input: {
      type: '',
      city: '',
    },
    newTypeData: [
      '旅遊美食', '交通運輸', '商業學術', '生活服務', '居家裝潢', '醫療保健',
      '工商服務'
    ],
    typeData: [{
        title: '旅遊美食',
        cat: '旅遊美食'
      },
      {
        title: '交通運輸',
        cat: '交通運輸'
      },
      {
        title: '商業學術',
        cat: '商業學術'
      },
      {
        title: '生活服務',
        cat: '生活服務'
      },
      {
        title: '居家裝潢',
        cat: '居家裝潢'
      },
      {
        title: '醫療保健',
        cat: '醫療保健'
      },
      {
        title: '工商服務',
        cat: '工商服務'
      },
    ],
    cityData: ['基隆市', '臺北市', '新北市', "桃園市", "新竹市", "新竹縣", "苗栗縣", "臺中市", "彰化縣",
      "南投縣", "雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣", "臺東縣", "花蓮縣", "宜蘭縣",
      "澎湖縣", "金門縣", "連江縣",
      // {
      //   label: "台北市",
      //   value: "臺北市"
      // }, {
      //   label: "台中市",
      //   value: "臺中市"
      // }, {
      //   label: "台南市",
      //   value: "臺南市"
      // }, {
      //   label: "台東縣",
      //   value: "臺東縣"
      // },
      "開山里"
    ],
    icon: {
      "旅遊美食": 'coffee.dcc874a2.png',
      "交通運輸": 'car.14d96be0.png',
      "商業學術": 'book.c4cadb77.png',
      "生活服務": 'life.20a609dc.png',
      "居家裝潢": 'home.425274ca.png',
      "醫療保健": 'hosipital.6e137933.png',
      "工商服務": 'talk.1030aad0.png',
    },

  },

  mutations: {
    isLoadingChangeTrue(state) {
      state.isLoading = !state.isLoading
    },
    isControlCloseChangeTrue(state) {
      state.isControlClose = !state.isControlClose
    },
    isMenuChange(state) {
      state.isMenu = !state.isMenu
    },
    isSearchTypeChange(state) {
      state.isSearchType = !state.isSearchType
    },
    isSearchCityChange(state) {
      state.isSearchCity = !state.isSearchCity
    },
    isSearchMaskChange(state) {
      state.isSearchMask = !state.isSearchMask
    },
    isSearchTypeFalse(state) {
      state.isSearchType = false
      state.isSearchCity = false

    }


  },
  getters: {},
  actions: {},
  modules: {}
});