<template>
  <main class="main-section">
    <div class="main-box">
      <SectionTitle></SectionTitle>
    </div>
  </main>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
import SectionTitle from "@/components/sectionTitle.vue";
export default {
  name: "home_section2",
  components: {
    SectionTitle,
  },
};
</script>
