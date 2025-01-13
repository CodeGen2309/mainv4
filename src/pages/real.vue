<script setup>
import mainView from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath

let mainImg = `${currpath}/img/tstm.jpg`
let mainVideo = `${currpath}/test.mp4`

let mytiles = [
  {title: 'Обьекты строительства', img: `${currpath}/img/13.jpg`},
  {title: 'Купить квартиру', img: `${currpath}/img/tiles/nedv/kommnew.jpg`},
  {title: 'Гаражи', img: `${currpath}/img/tiles/nedv/garages.jpg`},
]


// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>

<template>
  <main-view 
  :isvideo="true" :videopath="mainVideo"
  :tiles="mytiles" :img="mainImg">
  </main-view>
</template>

