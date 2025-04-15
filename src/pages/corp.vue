<script setup>
import mainview from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath

let myTiles = [
  {
    title: 'Строительные материалы', 
    img: `${currpath}/v4sources/img/tiles/corp/akcii.jpg`,
    link: '/subzavod',
  },
  {
    title: 'Купить квартиру', 
    img: `${currpath}/v4sources/img/tiles/corp/nedvnew.jpg`,
    link: 'https://belbeton.ru/real-estate/',
  },
  {
    title: 'Обьекты затсройки', 
    img: `${currpath}/v4sources/img/tiles/corp/kommnew.jpg`,
    link: '/subreal',
  },
]

let mainImg = `${currpath}/v4sources/img/corp.jpg`

// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>


<template>
  <mainview 
    :tiles="myTiles" :img="mainImg">
  </mainview>
</template>


<style>

</style>