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
      'logoSectionMask'
    ])
  },
  methods: {
    ...mapMutations([
      'isLogoSectionMask'
    ]),
    clickMask() {

      this.$store.commit('isLogoSectionMask');
      console.log(this.$store.state.logoSectionMask);
    }
  },
}