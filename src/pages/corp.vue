<script setup>
import mainview from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath

let myTiles = [
  {title: 'Строительные материалы', img: `${currpath}/img/tiles/corp/akcii.jpg`},
  {title: 'Купить квартиру', img: `${currpath}/img/tiles/corp/nedvnew.jpg`},
  {title: 'Коммерческая недвижимость', img: `${currpath}/img/tiles/corp/kommnew.jpg`},
]

let mainImg = `${currpath}/img/corp.jpg`

// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>


<template>
  <mainview 
    :tiles="myTiles" :img="mainImg">
  </mainview>
</template>


<style>

</style>