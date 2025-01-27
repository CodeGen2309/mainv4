<script setup>
import mainView from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath

let mainImg = `${currpath}/v4sources/img/tstm.jpg`
let mainVideo = `${currpath}/v4sources/test.mp4`

let mytiles = [
  {
    title: 'Обьекты строительства', 
    img: `${currpath}/v4sources/img/13.jpg`,
    link: 'https://belbeton.ru/real-estate/construction/buildings/',
  },
  {
    title: 'Купить квартиру', 
    img: `${currpath}/v4sources/img/tiles/nedv/kommnew.jpg`,
    link: 'https://belbeton.ru/real-estate/price-list-for-property/',
  },
  {
    title: 'Гаражи', 
    img: `${currpath}/v4sources/img/tiles/nedv/garages.jpg`,
    link: 'https://belbeton.ru/real-estate/construction/garages/',
  },
]


// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>

<template>
  <main-view 
    :isvideo="true" :videopath="mainVideo"
    :tiles="mytiles" :img="mainImg"
  />
</template>

