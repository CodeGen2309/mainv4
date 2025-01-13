<script setup>
import mainview from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath


let mytiles = [
  {title: 'Интернет-магазин', img: `${currpath}/img/6.jpg`},
  {title: 'Акции и скидки', img: `${currpath}/img/16.jpg`},
  {title: 'Контакты', img: `${currpath}/img/tiles/zavod/conacts.jpg`},
]

let mainImg = `${currpath}/img/18.jpg`

// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>

<template>
  <mainview :tiles="mytiles" :img="mainImg" />
</template>
