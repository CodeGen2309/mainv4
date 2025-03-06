<script setup>
import { animate, stagger } from 'motion';
import { onMounted, ref }   from 'vue';
import subMenuList          from '/mocks/subMenu.json'

import sideMenu             from '@/components/sideMenu.vue';
import tile                 from '../components/tile.vue';
import router               from '@/router';
import mainSlider           from '@/components/mainSlider.vue';


let props = defineProps(['tiles', 'img', 'isvideo', 'videopath' ])

let onSubMenu = ref()
let showSubMenu = ref()
let currentSubMenu = ref(subMenuList['main'])



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


async function changeSubMenu (newMenu) {
  let subMenu, hideDefs, showDefs, durDefs

  showExtMenu()
  subMenu = document.querySelectorAll('.subMenu__list')
  hideDefs = { 'opacity': [1, 0], 'translateX': ['0px', '20px'] },
  showDefs = { 'opacity': [0, 1], 'translateX': ['-20px', '0px'] },
  durDefs  = { duration: 0.2 }

  await animate(subMenu, hideDefs, durDefs)
  currentSubMenu.value = subMenuList[newMenu]
  await animate(subMenu, showDefs, durDefs)
}


async function showExtMenu () {
  let subMenuItem = document.querySelector('.app__subMenu')
  let items = document.querySelectorAll('.subMenu__item')

  let animList = [
    [ subMenuItem, {'width': '100%'}, {duration: 0} ],
    [ subMenuItem,  { 'opacity': 1}, { duration: .5} ],
    [ items, { opacity: 1 }, { duration: .3, delay: stagger(0.03) } ]
  ]

  animate(animList)
}


async function hideExtMenu () {
  let subMenuItem = document.querySelector('.app__subMenu')

  let animTest = [
    [ subMenuItem, { 'opacity': 0}, { duration: .3} ],
    [ subMenuItem,  { 'width': '0%'}, {at: '+0.1'} ]
  ]

  await animate(animTest)
}


function print (ent) {
  console.log(ent);
}

</script>


<template>
  <section class="app">
    <div class="app__top">
      <side-menu class="app__smenu" @goClick="goTo" 
        :menu="subMenuList.main" @hoverOn="changeSubMenu"
      />

      <div class="app__imgHolder">
        <main-slider class="app__slider" />

        <div class="app__subMenu subMenu">
          <ul class="subMenu__list" @mouseleave="hideExtMenu">
            <li class="" v-for="(item, index) in currentSubMenu" :key="index">
              <a :href="item.link" class="subMenu__link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul class="app__tileList">
      <li v-for="item in props.tiles" class="app__tileItem" :key="item.title">
        <tile :link="item.link" class="app__tile" :title="item.title" :img="item.img"></tile>
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
  grid-template-rows: 7fr 3fr;
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


.subMenu {
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 10px;
  opacity: 0;
  
  display: flex;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;

  background: rgba(255, 255, 255, .8);
  /* background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(0, 0, 0, 0)
  ); */

  backdrop-filter: blur(10px);
}



.subMenu__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  height: 100%;


  list-style: none;
  letter-spacing: 1px;
}


.subMenu__item {
  display: flex;
}


.subMenu__link {
  position: relative;
  text-decoration: none;
  color: inherit;

  display: block;
  margin: 10px 30px;
  padding: 10px 0px;
  cursor: pointer;

  transition: .3s;
}


.subMenu__link:after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 0%; height: 1px;
  background: rgba(0, 0, 0, .7);
  transition: .3s;
} 


.subMenu__link:hover:after{
  width: 100%;
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