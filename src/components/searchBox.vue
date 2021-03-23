<template>
  <article class="searchBox">
    <div class="inputBox inputBox-type">
      <div
        id="baseSearch"
        class="typeSearch citySearch active-cityBtn"
        :class="{ 'active-citySearch': isSearchType }"
      >
        <div class="baseType" id="baseType">
          <button
            v-for="(item, index) in typeMenu()"
            :key="index"
            @click="input.type = item.title"
          >
            <img :src="`img/${icon[item.cat]}`" alt="旅遊美食" />
            <p>{{ item.title }}</p>
          </button>
        </div>
      </div>
      <div class="inputBox-icon">
        <img
          class="inputBox-houseIcon"
          src="../../imgShop1688/icon/store.png"
          alt="store.png"
        />
      </div>
      <div class="inputBox-input" @click.stop="openType">
        <input
          id="storeType"
          autocomplete="off"
          type="text"
          required="required"
          v-model="input.type"
        />
        <label class="inputBox-labeltype inputTitle">搜尋商家 / 分類</label>
      </div>
    </div>
    <div class="inputBox inputBox-city">
      <div
        id="citySearch"
        class="typeSearch citySearch active-cityBtn"
        :class="{ 'active-citySearch': isSearchCity }"
      >
        <div class="baseType" id="baseType">
          <button
            v-for="(item, index) in cityMenu()"
            :key="index"
            @click="input.city = item"
          >
            <p>{{ item }}</p>
          </button>
        </div>
      </div>
      <div class="inputBox-icon">
        <img
          class="inputBox-mapIcon"
          src="../../imgShop1688/icon/map.png"
          alt="map.png"
        />
      </div>
      <div class="inputBox-input" @click.stop="openCity">
        <input
          id="storeAdd"
          type="text"
          autocomplete="off"
          required="required"
          v-model="input.city"
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
