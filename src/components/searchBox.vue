<template>
  <article class="searchBox">
    <div id="citySearch" class="typeSearch citySearch active-cityBtn">
      <ul id="baseType">
        <li><p>基隆市</p></li>
        <li><p>臺北市</p></li>
        <li><p>新北市</p></li>
        <li><p>桃園市</p></li>
        <li><p>新竹市</p></li>
        <li><p>新竹縣</p></li>
        <li><p>苗栗縣</p></li>
        <li><p>臺中市</p></li>
        <li><p>彰化縣</p></li>
        <li><p>南投縣</p></li>
        <li><p>雲林縣</p></li>
        <li><p>嘉義市</p></li>
        <li><p>嘉義縣</p></li>
        <li><p>臺南市</p></li>
        <li><p>高雄市</p></li>
        <li><p>屏東縣</p></li>
        <li><p>臺東縣</p></li>
        <li><p>花蓮縣</p></li>
        <li><p>宜蘭縣</p></li>
        <li><p>澎湖縣</p></li>
        <li><p>金門縣</p></li>
        <li><p>連江縣</p></li>
        <li><p>開山里</p></li>
      </ul>
    </div>
    <div id="citySearch" class="typeSearch citySearch active-cityBtn">
      <ul id="baseType">
        <li><p>基隆市</p></li>
        <li><p>嘉義市</p></li>
        <li><p>嘉義縣</p></li>
        <li><p>臺南市</p></li>
        <li><p>高雄市</p></li>
        <li><p>屏東縣</p></li>
        <li><p>臺東縣</p></li>
        <li><p>花蓮縣</p></li>
        <li><p>宜蘭縣</p></li>
        <li><p>澎湖縣</p></li>
        <li><p>金門縣</p></li>
        <li><p>連江縣</p></li>
        <li><p>開山里</p></li>
      </ul>
    </div>
    <div class="inputBox inputBox-type">
      <div class="inputBox-icon">
        <img
          class="inputBox-houseIcon"
          src="../../imgShop1688/icon/store.png"
          alt="store.png"
        />
      </div>
      <div class="inputBox-input">
        <input
          id="storeType"
          autocomplete="off"
          type="text"
          required="required"
        />
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
        <input
          id="storeAdd"
          type="text"
          autocomplete="off"
          required="required"
        />
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
