<template>
  <section class="section2_content">
    <article class="web_content">
      <div class="webTitle">
        <div class="web_title_name">
          <h3>川老爺麻辣鍋</h3>
        </div>
        <div class="web_icon">
          <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
        </div>
      </div>
      <div class="web_inside">
        <div class="web_shop_img">
          <a href="#" class="link_map">
            <img src="../../imgShop1688/map-24px.png" alt="mapIcon" />
            <p>查看地圖</p>
          </a>
          <div class="shop_img">
            <img src="../../imgShop1688/shop-img.png" alt="商家圖片" />
          </div>
        </div>
        <div class="web_shop_title">
          <div class="shop_title">
            <div class="textLine">
              <h3>川老爺麻辣鍋</h3>
            </div>

            <div class="shop_icon_box">
              <div class="icon_type">
                <img src="../../imgShop1688/icon/coffee.png" alt="iconType" />
                <p>旅遊美食</p>
              </div>
              <div class="icon_city">
                <img src="../../imgShop1688/icon/map.png" alt="iconCity" />
                <p>台北市</p>
              </div>
            </div>
            <a href="#" class="web_button">
              <img src="../../imgShop1688/icon/searchBtn.png" alt="webSearch" />
              <p>查看商家</p>
            </a>
          </div>
        </div>
      </div>
    </article>
    <article
      class="web_scroll_page"
      ref="container"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @mouseleave="mouseup"
    >
      <div id="inSide_page" class="inSide_page" :style="transformStyle" ref="cards">
        <div class="scroll_items">
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
        </div>
        <div class="scroll_items">
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
        </div>
        <div class="scroll_items">
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
        </div>
        <div class="scroll_items">
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
          <div class="shopItems">
            <div class="shopTitle">
              <div class="shop_title_name">
                <h3>川老爺麻辣鍋</h3>
              </div>
              <div class="shop_icon">
                <img src="../../imgShop1688/Group 92.png" alt="web-icon" />
              </div>
            </div>
            <div class="shopImg">
              <img src="../../imgShop1688/item.png" alt="nail" />
            </div>
          </div>
        </div>
        <div class="minRange"></div>
      </div>
    </article>
    <div class="scrollBar_section" id="scrollBar_section">
      <!-- <button id="down" class="down" @click.stop="noAdd()"></button> -->
      <input
        class="rangeInput"
        type="range"
        v-model="scrollValue"
        min="0"
        :max="maxRange"
      />
      <!-- <button id="next" class="next" @click.stop="add()"></button> -->
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../../scss/main.scss";
</style>
<script src="../../js/section2_content.js"></script>
