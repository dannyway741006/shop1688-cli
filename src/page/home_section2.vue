<template>
  <main class="main-section">
    <div class="main-box">
      <SectionTitle></SectionTitle>
      <Section2Content></Section2Content>

    </div>
  </main>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script>
import SectionTitle from "@/components/sectionTitle.vue";
import Section2Content from "@/components/section2_content.vue";
export default {
  name: "home_section2",
  components: {
    SectionTitle,
    Section2Content,
  },
};
</script>
