<script setup>
import slideBack from '../components/slideCover.vue'
import tile from '../components/tile.vue'

let gradient = `
  linear-gradient(
    110deg,
    rgba(41, 128, 185, .5), 
    rgba(72, 52, 212, .5)
  );
`

let title = 'Микрорайон «Новый-2»'

let desc = `
  Ещё на стадии проектирования микрорайон «Новый-2» стал призером всероссийского конкурса 
  по реализации приоритетного национального проекта 
  «Доступное и комфортное жилье – гражданам России». <br><br>

  Микрорайон «Новый-2» располагается на границе с лесом в престижном районе Харьковской горы. 
  Он обрамлен ожерельем лесов хвойных и лиственных пород. 
`

let links = [
  {text: 'Подробнее', link: 'https://belbeton.ru/real-estate/price-list-for-property/'},
  {text: 'Купить квартиру', link: 'https://belbeton.ru/real-estate/construction/buildings/g_belgorod_mkr_novyy_2/'}
]

let tiles = [
  {"title": "На Некрасова", "img": "/public/v4sources/img/subreal/objects/nekras.jpg", "link": "https://belbeton.ru/real-estate/construction/buildings/zhk_na_nekrasova/"},
  {"title": "Северная звезда", "img": "/public/v4sources/img/subreal/objects/sever.jpg", "link": ""},
  {"title": "Новый 2", "img": "/public/v4sources/img/subreal/objects/new2.jpg", "link": ""},
  {"title": "Новые сады", "img": "/public/v4sources/img/subreal/objects/newgardens.jpg", "link": ""},
  {"title": "Новая Заря", "img": "/public/v4sources/img/subreal/objects/newsun.jpg", "link": ""},
]

</script>

<template>
<section class="subreal">
  <slideBack class="subreal__slide"
    :frontColor="gradient"
    backColor="rgba(104, 109, 224, .5)"
    img="/public/v4sources/img/subreal/main2.jpg"
    :title :desc :links
  />

  <div class="subreal__tiles">
    <tile class="subreal__tile"
      v-for="(item, index) in tiles" :key="index"
      :title="item.title" :img="item.img" :link="item.link"
      :class="{ 'subreal__tile_big': index == 0 }"
    />

  </div>
</section>
</template>

<style scoped>
.subreal::-webkit-scrollbar {
  display: none;
}

.subreal__slide {
  border-radius: 10px;
  box-sizing: border-box;
}


.subreal__tiles {
  padding: 40px;
  margin: 70px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 20px;
}

.subreal__tile{
  width: 100%; min-height: 300px;
  transition: .3s;
}

.subreal__tile:hover {
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, .1);
}

.subreal__tile_big {
  grid-row: span 2;
  grid-column: span 2;
}
</style>