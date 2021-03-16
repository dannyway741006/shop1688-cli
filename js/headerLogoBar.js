import {
  mapState,
  mapMutations
} from 'vuex';
export default {
  name: "headerLogoBar",
  props: {
    msg: String,
  },
  data() {
    return {
      nowDay: '',
      nowTime: ''
    }
  },
  computed: {
    ...mapState([
      'isLoading',
      'isControlClose',
      'isMenu',
      'isSearchMask'
    ]),
  },
  methods: {
    ...mapMutations([
      'isLoadingChangeTrue',
      'isControlCloseChangeTrue',
      'isMenuChange',
      'isSearchMaskChange'
    ]),

    // 得到當下時間
    timeFormate(timeStamp) {
      let newdate = new Date(timeStamp);
      let year = newdate.getFullYear();
      let month = newdate.getMonth() + 1 < 10 ? "0" + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
      let date = newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
      let hh = newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
      let mm = newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes();
      let ss = newdate.getSeconds() < 10 ? "0" + newdate.getSeconds() : newdate.getSeconds();
      this.nowTime = hh + ":" + mm + ":" + ss;
      this.nowDay = year + "/" + month + "/" + date;
    },
    // 定時器函數
    nowTimes() {
      let self = this;
      self.timeFormate(new Date());
      setInterval(function () {
        self.timeFormate(new Date());
      }, 1000);
    },
  },

  mounted() {
    //nowTimes() 掛載完成時
    this.nowTimes();
  },
  created() {
    window.addEventListener("load", () => {
      // nowTimes() 創建完成時
      this.nowTimes();
    });
  },

};