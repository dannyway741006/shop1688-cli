<template>
  <section id="draggableArea">
    <article class="area-one">
      <div class="icon" id="square1">
        <a href="#"><img src="../../imgShop1688/icon/star.png" /></a>
        <h2>熱門商家</h2>
      </div>
      <div class="icon" id="square2">
        <a href="#"><img src="../../imgShop1688/icon/choose.png" /></a>
        <h2>精選商家</h2>
      </div>
      <div class="icon" id="square3">
        <a href="#"><img src="../../imgShop1688/icon/len.png" /></a>
        <h2>全部商家</h2>
      </div>
      <div class="icon" id="square4">
        <a href="#"><img src="../../imgShop1688/icon/join.png" /></a>
        <h2>成為商家</h2>
      </div>
    </article>
    <article class="area-two" id="square5">
      <div class="header-title">
        <div class="title">
          <h2>在地商家一站全搜</h2>
        </div>
        <div class="control"></div>
        <div class="control"></div>
        <div class="control"></div>
      </div>
      <div class="header-bottom">
        <div class="arrow">
          <img src="../../imgShop1688/left-arrow.png" alt="arrow" />
        </div>
        <div class="arrow">
          <img src="../../imgShop1688/right-arrow.png" alt="arrow" />
        </div>
        <div class="arrow">
          <img src="../../imgShop1688/afresh.png" alt="afresh" />
        </div>
        <div class="web-domin">
          <p>https://www.shop1688.com.tw/</p>
        </div>
        <div class="arrow --arrow">
          <img src="../../imgShop1688/down-button.png" alt="dom-img" />
          <img class="pos" src="../../imgShop1688/arrow.png" alt="dom-img" />
        </div>
      </div>
      <div class="logo-section">
        <div class="link">
          <a href="#">
            <img src="../../imgShop1688/icon/icon_join.png" alt="link" />
            成為商家
          </a>
        </div>
        <div class="logo-animation">
          <div class="prototype" @mousemove="parallax">
            <div class="bg-1 bubble-left"></div>
            <div class="bg-2 bubble-left"></div>
            <div class="bg-3 bubble-left"></div>
            <div class="bg-4 bubble-left"></div>
            <div class="bg-5 bubble-left"></div>
            <div class="bg-6 bubble-left"></div>
            <div class="bg-7 bubble-bottom"></div>
            <div class="bg-8 bubble-bottom"></div>
            <div class="bg-9 bubble-bottom"></div>
            <div class="bg-10 bubble-bottom"></div>
            <div class="bg-11 bubble-bottom"></div>
            <div class="bg-12 bubble-bottom"></div>
            <div class="bg-13 bubble-bottom bubble"></div>
            <div class="bg-14 bubble-right bubble"></div>
            <div class="bg-15 bubble-right bubble"></div>
            <div class="bg-16 bubble-right bubble"></div>
            <div class="bg-17 bubble-right bubble"></div>
            <div class="bg-18 bubble-right bubble"></div>
            <div class="bg-19 bubble-right bubble"></div>
            <div class="bg-13 bubble-bottom bubble"></div>
            <div class="bg-14 bubble-right bubble"></div>
            <div class="bg-15 bubble-right bubble"></div>
            <div class="bg-16 bubble-right bubble"></div>
            <div class="bg-17 bubble-right bubble"></div>
            <div class="bg-18 bubble-right bubble"></div>
            <div class="bg-19 bubble-right bubble"></div>
            <div class="bg-20 bubble-right"></div>
            <div class="bg-s bubble-logo"></div>
            <div class="bg-h bubble-logo"></div>
            <div class="bg-o bubble-logo"></div>
            <div class="bg-p bubble-logo"></div>
            <div class="bg-no1 bubble-logo"></div>
            <div class="bg-no6 bubble-logo"></div>
            <div class="bg-no8 bubble-logo"></div>
            <div class="bg-no8_2 bubble-logo"></div>
          </div>
          <SearchBox />
        </div>
      </div>
    </article>
  </section>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/draggable.js"></script>
