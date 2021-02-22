<template>
  <header class="header">
    <HeaderLogoBar />
  </header>
</template>

<script>
import HeaderLogoBar from "@/components/headerLogoBar.vue";
export default {
  name: "HeaderLogoBar",
  components: {
    HeaderLogoBar,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

export default { name: "App", components: { HomeSection1, }, };
