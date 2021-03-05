<template>
  <article class="searchBox">
    <div class="inputBox inputBox-type">
      <div class="inputBox-icon">
        <img
          class="inputBox-houseIcon"
          src="../../imgShop1688/icon/store.png"
          alt="store.png"
        />
      </div>
      <div class="inputBox-input">
        <input id="storeType" autocomplete="off" type="text" required="required" />
        <label class="inputBox-labeltype inputTitle">搜尋商家 / 分類</label>
      </div>
    </div>
    <div class="inputBox inputBox-city">
      <div class="inputBox-icon">
        <img
          class="inputBox-mapIcon"
          src="../../imgShop1688/icon/map.png"
          alt="map.png"
        />
      </div>
      <div class="inputBox-input">
        <input id="storeAdd" type="text" autocomplete="off" required="required" />
        <label class="inputBox-labelcity inputTitle">地區</label>
      </div>
    </div>
    <div class="inputBox-button">
      <div class="buttonBox">
        <button class="button-color1">
          <img src="../../imgShop1688/icon/searchBtn.png" />
          <p>搜尋</p>
        </button>
        <button class="button-color2">
          <img src="../../imgShop1688/icon/searchBtn.png" />
          <p>搜尋</p>
        </button>
      </div>
    </div>
  </article>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/searchBox.js"></script>
