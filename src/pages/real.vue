<script setup>
import tile from '../components/tile.vue';
import mainView from '../views/mainView.vue'

let mainImg = '/public/img/tstm.jpg'

let mytiles = [
  {title: 'Обьекты строительства', img: '/public/img/13.jpg'},
  {title: 'Купить квартиру', img: '/public/img/tiles/nedv/kommnew.jpg'},
  {title: 'Гаражи', img: '/public/img/tiles/nedv/garages.jpg'},
]
</script>

<template>
  <main-view :tiles="mytiles" :img="mainImg"></main-view>
</template>

