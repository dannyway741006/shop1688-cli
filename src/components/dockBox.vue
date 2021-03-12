<template>
  <article class="dockBox js-up-dock">
    <div class="dock-position">
      <div id="square6" class="dock-search-box" @click.stop="controlOpen">
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

      <ul class="dock" :class="{ 'active-dock': isLoading }">
        <li showhints="旅遊美食">
          <a href="#" @mousemove.stop="add1" @mouseleave.stop="removeAdd1">
            <img ref="child1" src="../../imgShop1688/icon/coffee.png" alt="coffee"
          /></a>
        </li>
        <li showhints="交通運輸">
          <a href="#" @mousemove.stop="add2" @mouseleave.stop="removeAdd2">
            <img ref="child2" src="../../imgShop1688/icon/car.png" alt="car"
          /></a>
        </li>
        <li showhints="商業學術">
          <a href="#" @mousemove.stop="add3" @mouseleave.stop="removeAdd3">
            <img ref="child3" src="../../imgShop1688/icon/book.png" alt="book" />
          </a>
        </li>
        <li showhints="生活服務">
          <a href="#" @mousemove.stop="add4" @mouseleave.stop="removeAdd4">
            <img ref="child4" src="../../imgShop1688/icon/life.png" alt="life" />
          </a>
        </li>
        <li showhints="醫療保健">
          <a href="#" @mousemove.stop="add5" @mouseleave.stop="removeAdd5">
            <img ref="child5" src="../../imgShop1688/icon/home.png" alt="home" />
          </a>
        </li>
        <li showhints="居家裝潢">
          <a href="#" @mousemove.stop="add6" @mouseleave.stop="removeAdd6">
            <img
              ref="child6"
              src="../../imgShop1688/icon/hosipital.png"
              alt="hosipital"
            />
          </a>
        </li>
        <li showhints="工商服務">
          <a href="#" @mousemove.stop="add7" @mouseleave.stop="removeAdd7">
            <img ref="child7" src="../../imgShop1688/icon/talk.png" alt="talk" />
          </a>
        </li>

        <li class="control-type" @click.stop="controlSmallOpen" showhints="展開">
          <a href="#" class="control-small">
            <img
              class="img-scale"
              ref="child8"
              src="../../imgShop1688/icon/s.png"
              alt="banner"
          /></a>
        </li>
      </ul>
    </div>
  </article>
</template>
<style lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/dockBox.js"></script>
