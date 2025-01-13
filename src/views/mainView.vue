<script setup>
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';

import sideMenu from '@/components/sideMenu.vue';
import tile from '../components/tile.vue';
import router from '@/router';
import videoBack from '@/components/videoBack.vue';


let props = defineProps(['tiles', 'img', 'isvideo', 'videopath' ])


async function enterAimation () {
  let topimg = document.querySelector('.app__img');
  let tiles = document.querySelectorAll('.app__tile');

  animate(topimg, { opacity: 1, scale: 1.05, translateX: '20px' }, { duration: .8 })

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


function print (ent) {
  console.log(ent);
}


onMounted(enterAimation)
</script>




<template>
  <section class="app">
    <div class="app__top">
      <side-menu @goClick="goTo" />

      <div class="app__imgHolder">
        <div class="app__imgCover"></div>
        
        <video-back v-if="props.isvideo" :video="props.videopath" class="app__img inviz" />
        <img v-else class="app__img inviz" :src="props.img" />
      </div>
    </div>  

    <ul class="app__tileList">
      <li v-for="item in props.tiles" class="app__tileItem" :key="item.title">
        <tile class="app__tile inviz" :title="item.title" :img="item.img"></tile>
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
  grid-template-rows: 4fr 2fr;
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



.app__imgHolder {
  position: relative;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  transition: .3s;
}


.app__imgCover {
  position: absolute;
  z-index: 9;
  top: 0; left: 0; right: 0; bottom: 0;

  background: linear-gradient(
    100deg,
    white 7%,
    rgba(255, 255, 255, 0) 40%
  );


  transition: .3s;
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


.inviz {
  opacity: 0;
}

</style>