<script setup>
import mainview from '../views/mainView.vue'

let devpath = '/public'
let prodpath = '.'
let currpath = prodpath


let mytiles = [
  {
    title: 'Интернет-магазин', 
    img: `${currpath}/v4sources/img/6.jpg`,
    link: 'https://belbeton.ru/building-materials/catalog/',
  },

  {
    title: 'Акции и скидки', 
    img: `${currpath}/v4sources/img/16.jpg`,
    link: 'https://belbeton.ru/building-materials/promotions-and-discounts/',
  },

  {
    title: 'Контакты', 
    img: `${currpath}/v4sources/img/tiles/zavod/conacts.jpg`,
    link: 'https://belbeton.ru/building-materials/contacts/',
  },

]

let mainImg = `${currpath}/v4sources/img/18.jpg`

// ПЕРЕД БИЛДОМ ПОМЕНЯЙ ПУТИ К АССЕТАМ
</script>

<template>
  <mainview :tiles="mytiles" :img="mainImg" />
</template>
