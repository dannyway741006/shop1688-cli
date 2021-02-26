<template>
  <section class="logo">
    <article class="logo-w50">
      <a><img src="../../imgShop1688/logo.png" alt="logo"/></a>
      <div class="logo-type logo-items">
        File
        <ul class="items">
          <li><a>旅遊美食</a></li>
          <li><a>交通運輸</a></li>
          <li><a>商業學術</a></li>
          <li><a>生活服務</a></li>
          <li><a>居家裝潢</a></li>
          <li><a>醫療保健</a></li>
          <li><a>工商服務</a></li>
        </ul>
      </div>
      <div class="logo-type logo-links">
        Contact
        <ul class="items">
          <li>
            <a href="https://www.master-mkt.com.tw/" target="_blank"
              >大師策略行銷</a
            >
          </li>
          <li>
            <a href="https://www.ksdon818.com/" target="_blank"
              >凱斯東網路行銷</a
            >
          </li>
          <li>
            <a href="https://www.aosiman-marketing.com/" target="_blank"
              >奧斯曼網路行銷</a
            >
          </li>
        </ul>
      </div>
    </article>
    <article class="logo-w50 logo-nowTime">
      <div class="logo-icon">
        <img src="../../imgShop1688/search.png" alt="icon" />
      </div>
      <div class="logo-icon">
        <img src="../../imgShop1688/voice.png" alt="icon" />
      </div>
      <div class="logo-icon">
        <img src="../../imgShop1688/clock.png" alt="icon" />
      </div>
      <div class="nowTime">
        <p>{{ nowDay }}</p>
        <p>{{ nowTime }}</p>
      </div>
    </article>
  </section>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/home.js"></script>
