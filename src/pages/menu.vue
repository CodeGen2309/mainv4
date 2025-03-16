<script setup>
import { animate, stagger } from 'motion';
import { onMounted, ref } from 'vue';
import bigMenu from '/mocks/bigMenu.json'

let currentMenu = ref(bigMenu.jnk)
let pager = bigMenu.mainMenu


let menuList = [
  bigMenu.corp,
  bigMenu.realEstate,
  bigMenu.shop,
  bigMenu.jnk
]




async function changeSubMenu (index) {
  let menuHolder = document.querySelectorAll('.menup__mosaic')
  let menuCover = document.querySelectorAll('.menup__back')
  let newMenu = menuList[index]


  await animate(
    menuHolder,
    { opacity: 0, translateX: '-30px'},
    { duration: .4 }
  )

  currentMenu.value = newMenu

  setTimeout(() => {
      animate(
      menuHolder,
      { opacity: [0, 1], translateX: ['30px', '0px']},
      { duration: .4, delay: stagger(0.02) }
    )
  }, 300);

  await animate(
    menuCover,
    { opacity: 0 },
    { duration: .4 }
  )
}
</script>

<template>
  <section class="menup">
    <ul class="menup__pager">
      <li class="menup__pagerItem" v-for="(item, index) in pager" :key="index"
        @click="changeSubMenu(index)"
      >
        <div class="menup__pagerBacklight"></div>
        <p class="menup__pagerText">{{ item.text }}</p>
      </li>
    </ul>

    <div class="menup__mosCover">
      <div class="menup__mosaicHolder">
        <ul class="menup__mosaic">
          <li class="menup__mosaicItem menuItem" v-for="(item, index) in currentMenu" :key="index"
            :style="item.style"
          >
            <img class="menup__img" :src="item.img">
            <div class="menup__cover"></div>

            <div class="menup__transformer menup__title">
              <p class="menup__titleText">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style scoped>

.menup {
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  max-width: 1500px;

  padding: 40px;
  padding-top: 60px;

  font-size: 16px;
}

.menup__pager {
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;

  border-width: 1px 0px;
  border-style: solid;
  border-color:rgba(0, 0, 0, .5);
  background: rgba(255, 255, 255, .2);

  letter-spacing: 2px;
  font-size: 18px;
  padding: 0;
}


.menup__pagerItem {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 30px 0px;
  cursor: pointer;
  transition: .3s;
}

.menup__pagerItem:hover {
  color: white;
}


.menup__pagerItem:hover .menup__pagerBacklight{
  opacity: 1;
  width: 100%;
}

.menup__pagerBacklight {
  position: absolute;
  width: 0%; height: 100%;
  background: #74b9ff;
  opacity: 0;
  transition: .4s;
}

.menup__pagerText {
  margin: 0; padding: 0;
  position: absolute;
}


.menup__mosCover {
  position: relative;
  max-height: 100%;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;  
}


.menup__mosCover::before {
  content: '';
  position: absolute;
  height: 100px; width: 100%;
  left: 0; top: 0;

  /* background: #74b9ff; */
  background: linear-gradient(
    to bottom, 
    rgba(255, 255, 255, 1), 
    rgba(0, 0, 0, 0
  ));

  z-index: 2;
}


.menup__mosCover::after {
  content: '';
  position: absolute;
  height: 100px; width: 100%;
  left: 0; bottom: 0;

  /* background: #74b9ff; */
  background: linear-gradient(
    to top, 
    rgba(255, 255, 255, 1), 
    rgba(0, 0, 0, 0
  ));

  z-index: 2;
}


.menup__mosaicHolder {
  position: relative;
  overflow: scroll;
  height: 100%;
  width: 100%;
  max-height: 80vh;
  box-sizing: border-box;
}


.menup__mosaicHolder::-webkit-scrollbar {
  display: none;
  opacity: 0;
}


.menup__mosaic {
  display: grid;
  
  grid-template-rows: repeat(3, 250px);
  grid-template-columns: repeat(9, 1fr);
  grid-auto-columns: 3fr;
  grid-auto-rows: minmax(250px, 1fr);
  grid-auto-flow: row;

  gap: 30px;

  padding: 40px 0;
  list-style: none; 
  flex-grow: 1;
}


.menup__mosaicItem {
  position: relative;
  border-radius: 10px 10px 10px 0px;
  overflow: hidden;
  grid-column: span 3;
  transition: .3s;
}


.menup__mosaicItem:hover {
  box-shadow: 10px -5px 10px 3px rgba(0, 0, 0, .3);
}


.menup__img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

.menup__cover {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  background: linear-gradient(
    to top right,
    rgba(0, 0, 0, .4),
    rgba(0, 0, 0, .0),
    rgba(0, 0, 0, 0)
  );

  transition: .3s;
}

.menup__transformer {
  transform: skewX(40deg) translateX(-25px);
  background: white;
}

.menup__title {
  position: absolute;
  left: 0; bottom: 0;
  min-width: 10%;
  margin: 0; padding: 15px 50px;
  font-size: 18px;
  transition: .7s;
}

.menup__titleText {
  transform: skewX(-40deg);
  margin: 0; padding: 0;
  font-size: 16px;
  letter-spacing: 1px;
}



@media (max-width: 1200px) {
  .menup__mosaic {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-flow: dense;
  }

  .menup__mosaic_item {
    grid-column: span 2;
  }
}


@media (max-width: 900px) {
  .menup__mosaic {
    grid-template-columns: repeat(3, 1fr);
  }

  .menup__mosaic_item {
    grid-column: span 3 !important;
  }
}
</style>

