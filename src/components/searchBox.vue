<template>
  <article class="searchBox">
    <div class="inputBox">
      <img src="../../imgShop1688/icon/store.png" alt="store.png" />
      <input id="storeType" autocomplete="off" type="text" required="required" />
      <label class="inputTitle">搜尋商家 / 分類</label>
    </div>
    <div class="inputBox">
      <img src="../../imgShop1688/icon/map.png" alt="map.png" />
      <input id="storeAdd" type="text" autocomplete="off" required="required" />
      <label class="inputTitle">地區</label>
    </div>
    <!-- <div class="only-position">
      <button class="inputBtn" id="search">
        <img src="" />
        <p>{{ webBtnSearch }}</p>
      </button>
    </div> -->
  </article>
  <!-- <section class="web-search-bar" :class="{'active-bgColor-change':baColorChange}">
              <article class="web-input typeGroup" :class="{'active-type-color':typeBgChange}"
                @click.stop="openSearchItems">
                <img src="./imgShop1688/type-icon.png" alt="type-icon">
                <input id="storeType" autocomplete="off" v-model="input.type" type="text" required="required"
                  @keyup.enter="search" @keyup.down="selectDown">
                <label class="inputTitle">搜尋商家 / 分類</label>
              </article>
              <div class="typeSearch" :class="{'active-typeBtn':openTypeSearch,'active-close-typeBtn':closeTypeSearch}"
                v-show="titleMenu.length" id="baseSearch">
                <ul id="baseType">
                  <li v-for="item in titleMenu" @click="input.type = item.title">
                    <img :src="`./imgShop1688/sevenIcon/${icon[item.cat]}`" loading="lazy">
                    <p>
                      {{item.title}}
                    </p>
                  </li>
                </ul>
              </div>
              <article class="web-input cityGroup" :class="{'active-city-color':cityBgChange}"
                @click.stop="opencitySearchItems">
                <img src="./imgShop1688/city-icon.png" alt="city-icon">
                <input id="storeAdd" type="text" required="required" autocomplete="off" v-model="input.city"
                  @keyup.enter="search">
                <label class="inputTitle">地區</label>

              </article>

              <div class="typeSearch citySearch" id="citySearch"
                :class="{'active-cityBtn':openCitySearch,'active-close-cityBtn':closeOpenCitySearch}">
                <ul id="baseType">
                  <li v-for="(item, index) in cityData" @click="input.city = item">
                    <p>
                      {{item}}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="only-position">
                <button class="inputBtn" id="search" @click="search">
                  <img src="./imgShop1688/search-icon.png">
                  <p>{{webBtnSearch}}</p>
                </button>
              </div>

            </section> -->
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/searchBox.js"></script>
