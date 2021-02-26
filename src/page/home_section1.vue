<template>
  <header class="header">
    <HeaderLogoBar />
    <DraggableArea />
  </header>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
import HeaderLogoBar from "@/components/headerLogoBar.vue";
import DraggableArea from "@/components/draggableArea.vue";

export default {
  name: "home_section1",
  components: {
    HeaderLogoBar,
    DraggableArea
  }
};
</script>
