<script setup>
import tile from '../components/tile.vue';
import mainview from '../views/mainView.vue'

let mytiles = [
  {title: 'Интернет-магазин', img: '/public/img/6.jpg'},
  {title: 'Акции и скидки', img: '/public/img/16.jpg'},
  {title: 'Контакты', img: '/public/img/tiles/zavod/conacts.jpg'},
]


let mainImg = '/public/img/18.jpg'

</script>

<template>
  <mainview :tiles="mytiles" :img="mainImg" />
</template>
