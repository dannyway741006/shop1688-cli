<template>
  <article class="searchBox">
    <div class="inputBox inputBox-type">
      <div
        id="baseSearch"
        class="typeSearch citySearch active-cityBtn"
        :class="{ 'active-citySearch': isSearchType }"
      >
        <ul id="baseType">
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
          <button>
            <img src="img/coffee.dcc874a2.png" alt="旅遊美食" />
            <p>基隆市</p>
          </button>
        </ul>
      </div>
      <div class="inputBox-icon">
        <img
          class="inputBox-houseIcon"
          src="../../imgShop1688/icon/store.png"
          alt="store.png"
        />
      </div>
      <div class="inputBox-input" @click.stop="openType">
        <input id="storeType" autocomplete="off" type="text" required="required" />
        <label class="inputBox-labeltype inputTitle">搜尋商家 / 分類</label>
      </div>
    </div>
    <div class="inputBox inputBox-city">
      <div
        id="citySearch"
        class="typeSearch citySearch active-cityBtn"
        :class="{ 'active-citySearch': isSearchCity }"
      >
        <ul id="baseType">
          <button><p>基隆市</p></button>
          <button><p>臺北市</p></button>
          <button><p>新北市</p></button>
          <button><p>桃園市</p></button>
          <button><p>新竹市</p></button>
          <button><p>新竹縣</p></button>
          <button><p>苗栗縣</p></button>
          <button><p>臺中市</p></button>
          <button><p>彰化縣</p></button>
          <button><p>南投縣</p></button>
          <button><p>雲林縣</p></button>
          <button><p>嘉義市</p></button>
          <button><p>嘉義縣</p></button>
          <button><p>臺南市</p></button>
          <button><p>高雄市</p></button>
          <button><p>屏東縣</p></button>
          <button><p>臺東縣</p></button>
          <button><p>花蓮縣</p></button>
          <button><p>宜蘭縣</p></button>
          <button><p>澎湖縣</p></button>
          <button><p>金門縣</p></button>
          <button><p>連江縣</p></button>
          <button><p>開山里</p></button>
        </ul>
      </div>
      <div class="inputBox-icon">
        <img
          class="inputBox-mapIcon"
          src="../../imgShop1688/icon/map.png"
          alt="map.png"
        />
      </div>
      <div class="inputBox-input" @click.stop="openCity">
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
