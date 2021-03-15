<template>
  <div class="dock-search-box" @click.stop="controlOpen">
    <ul
      class="dock-search"
      :class="{
        'active-dock-search': isLoading,
        'active-control-close': isControlClose,
      }"
    >
      <li class="js-icon">
        <img src="../../imgShop1688/icon/search.png" alt="search" />
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/dockSearchBox.js"></script>
