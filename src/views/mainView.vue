<script setup>
import { animate, stagger } from 'motion';
import { onMounted, ref } from 'vue';

import sideMenu from '@/components/sideMenu.vue';
import tile from '../components/tile.vue';
import router from '@/router';
import mainSlider from '@/components/mainSlider.vue';
import extendMenu from '@/components/extendMenu.vue';


let props = defineProps(['tiles', 'img', 'isvideo', 'videopath' ])
let extMenu = ref()


async function enterAimation () {
  let topimg = document.querySelector('.app__img');
  let tiles = document.querySelectorAll('.app__tile');

  // animate(topimg, { opacity: 1, scale: 1.05, translateX: '20px' }, { duration: .8 })

  animate(tiles,  
    {  opacity: [0, 1],  translateX: ['-50px', '0px'] },
    { duration: .3, delay: stagger(0.1) }
  )
}


async function leaveAnim () {
  let topimg = document.querySelector('.app__img');
  let tiles = document.querySelectorAll('.app__tileItem');

  animate(tiles, { opacity: 0, scale: 0.8 }, {duration: .4, delay: stagger(0.1)})
  await animate(topimg, { opacity: 0, scale: 1.05, translateX: '50px' }, { duration: .4 })

  return true
}



async function goTo (link) {
  let currRoute = router.currentRoute.value.name
  let isCurrLink = link == `/${currRoute}`

  if (isCurrLink) { return }

  await leaveAnim ()
  router.push(link)
}


function showExtMenu () {
  console.log('SHOW EXT MENU');
  extMenu.value = true
}

function hideExtMenu () {
  console.log('HIDE EXT MENU');
  extMenu.value = false
}


function print (ent) {
  console.log(ent);
}


onMounted(enterAimation)
</script>




<template>
  <section class="app">
    <div class="app__top">
      <side-menu class="app__smenu" @goClick="goTo" 
        @mouseenter="showExtMenu" @mouseleave="hideExtMenu"
      />

      <div class="app__imgHolder">
        <main-slider class="app__slider" />
        <transition name = "testAnim">
          <extend-menu class="app__extMenu" v-show="extMenu" />
        </transition>
      </div>
    </div>  

    <ul class="app__tileList">
      <li v-for="item in props.tiles" class="app__tileItem" :key="item.title">
        <tile :link="item.link" class="app__tile inviz" :title="item.title" :img="item.img"></tile>
      </li>
    </ul>
  </section>
</template>


<style scoped>
body {
  position: relative;
  margin: 0; padding: 0;
}


.header {
  z-index: 9;
}


.app {
  position: absolute;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 5fr 2fr;
  gap: 20px;

  padding: 20px;
  box-sizing: border-box;
}

.app__top {
  display: flex;
  gap: 20px;

  border-radius: 10px;
  overflow: hidden;
}

.app__smenu {
  flex-shrink: 0;
}



.app__imgHolder {
  position: relative;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  transition: .3s;
}


.app__slider {
  height: 100%;
}

.app__extMenu {
  position: absolute;
  top: 0px; left: 0px; bottom: 0;
  width: 100%;
  overflow: hidden;

  background: rgba(255, 255, 255, .9);
  /* background:linear-gradient(
    100deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(0, 0, 0, 0) 
  ); */
  
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, .7);
  letter-spacing: 1px;
  transition: .4s;
}



.app__img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}


.app__tileList {
  list-style: none;
  margin: 0; padding: 0;

  display: flex;
  gap: 20px;
}

.app__tileItem {
  flex-grow: 1;
  border-radius: 10px;
  /* overflow: hidden; */

  cursor: pointer;
  transition: .3s;
}


.app__tileItem:hover {
  /* transform: translateX(4px) translateY(-4px);
  box-shadow: 0 0 20px rgba(0, 0, 0, .2); */
  flex-grow: 1.15;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
}

.testAnim-enter-active,
.testAnim-leave-active {
  transform: translateX(-10%);
  opacity: 0;
}


.inviz {
  opacity: 0;
}

</style>