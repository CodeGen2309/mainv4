<script setup>
import mainview from '../views/mainView.vue'

let myTiles = [
  {title: 'Строительные материалы', img: '/public/img/tiles/corp/akcii.jpg'},
  {title: 'Купить квартиру', img: '/public/img/tiles/corp/nedvnew.jpg'},
  {title: 'Коммерческая недвижимость', img: '/public/img/tiles/corp/kommnew.jpg'},
]

let mainImg = '/public/img/corp.jpg'

</script>


<template>
  <mainview :tiles="myTiles" :img="mainImg" />
</template>


<style>

</style>