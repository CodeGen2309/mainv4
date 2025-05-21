<script setup>
import { onMounted } from 'vue'
import slideBack from '../components/slideCover.vue'
import tile from '../components/tile.vue'
import { animate, inView } from 'motion'

let gradient = `
  linear-gradient(
    110deg,
    rgba(41, 128, 185, .5), 
    rgba(72, 52, 212, .5)
  );
`

let title = 'ЖК "На Некрасова"'

let desc = `
  перспективный, современный, комфортный жилой комплекс. 
  Он находится в северной части Белгорода. Здесь построены и 
  введены в эксплуатацию три многоквартирных дома:  девятиэтажный, 
  двенадцатиэтажный и пятнадцатиэтажный, и подземный паркинг.
`

let links = [
  {text: 'Подробнее', link: 'https://belbeton.ru/real-estate/price-list-for-property/'},
  {text: 'Купить квартиру', link: 'https://belbeton.ru/real-estate/construction/buildings/zhk_na_nekrasova/'}
]

let tiles = [
  {"title": "На Некрасова", "img": "/v4sources/img/subreal/objects/nekras.jpg", 
    "link": "https://belbeton.ru/real-estate/construction/buildings/zhk_na_nekrasova/"
  },
  {"title": "Северная звезда", "img": "/v4sources/img/subreal/objects/sever.jpg", 
    "link": "https://belbeton.ru/real-estate/construction/buildings/zhk_severnaya_zvezda/"
  },
  {"title": "Новый 2", "img": "/v4sources/img/subreal/objects/new2.jpg", 
    "link": "https://belbeton.ru/real-estate/construction/buildings/g_belgorod_mkr_novyy_2/"
  },
  {"title": "Новые сады", "img": "/v4sources/img/subreal/objects/newgardens.jpg", 
    "link": "https://belbeton.ru/real-estate/construction/buildings/kottedzhnyy_poselok_novye_sady/"
  },
  {"title": "Новая Заря", "img": "/v4sources/img/subreal/objects/newsun.jpg", 
    "link": "https://belbeton.ru/real-estate/construction/buildings/p_razumnoe_zhk_novaya_zarya/"
  },
]



function showImg (ent) {
  let target = ent.target
  let images = document.querySelectorAll('.nekr__img')

  for (let item of images) {
    item.classList.add('nekr__img_inactive')
  }

  target.classList.remove('nekr__img_inactive')
}

function clearImg (ent) {
  let target = ent.target
  let images = document.querySelectorAll('.nekr__img')

  for (let item of images) {
    item.classList.remove('nekr__img_inactive')
  }
}


function setViewTrackers () {
  animate('.nekr__img', { opacity: 0 })

  inView( '.nekr', 
  (elem, info) => {
    animate('.nekr__img', 
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: .5 }
    )
  },
  {margin: '0px 0px -100px 0px'}
  )
}

onMounted(() => {
  // setViewTrackers()
})
</script>

<template>
<section class="subreal">
  <slideBack class="subreal__slide"
    :frontColor="gradient"
    backColor="rgba(104, 109, 224, .5)"
    img="/v4sources/img/subreal/nekras.jpg"
    :title :desc :links
  />

  <div class="subreal__tiles">
    <tile class="subreal__tile"
      v-for="(item, index) in tiles" :key="index"
      :title="item.title" :img="item.img" :link="item.link"
      :class="{ 'subreal__tile_big': index == 0 }"
    />

  </div>

  <div class="supreal__nekr nekr">
    <div class="nekr__images" @mouseleave="clearImg">
      <img class="nekr__img" src="/v4sources/img/subreal/3.jpg"
        @mouseenter="showImg"
      >
      <img class="nekr__img nekr__img_top" src="/v4sources/img/subreal/nerasdop.jpg"
        @mouseenter="showImg"
      >
      <img class="nekr__img nekr__img_last nekr__img_bot" src="/v4sources/img/subreal/5.jpg"
        @mouseenter="showImg"
      >
    </div>

    <div class="nekr__content">
      <h2 class="nekr__title">На Некрасова</h2>

      <p class="nekr__desc">
        ЖК «На Некрасова» построен как перспективный, 
        современный, комфортный жилой комплекс. Он находится в 
        северной части Белгорода. Построены и введены в 
        эксплуатацию три многоквартирных дома: два 
        девятиэтажных и один двенадцатиэтажный и подземный 
        паркинг.
        Внешний дизайн домов радует глаз: выполненные в едином 
        стиле, яркие, позитивные дома микрорайона поднимают 
        настроение. Все дома построены из качественных 
        материалов, производства ЖБК-1.
      </p>

      <div class="nekr__button">Подробнее</div>
    </div>
  </div>


  <div class="supreal__nekr nekr">
    <div class="nekr__images" @mouseleave="clearImg">
      <img class="nekr__img nekr__img_last" src="/v4sources/img/subreal/new2/4.jpg"
        style="margin-bottom: 100px; margin-left: -120px;"
        @mouseenter="showImg"
      >

      <img class="nekr__img" src="/v4sources/img/subreal/new2/3.jpg"
        style="margin-top: 200px;"
        @mouseenter="showImg"
      >      

      <img class="nekr__img" src="/v4sources/img/subreal/new2/2.jpg"
        @mouseenter="showImg"
      >
    </div>

    <div class="nekr__content" style="top: 400px; height: 400px; left: 40px;">
      <h2 class="nekr__title">Новый 2</h2>

      <p class="nekr__desc">
        Гармоничное сочетание нетронутой природы и цивилизации, 
        удаленности от города и удобной транспортной связи с ним, 
        единый архитектурный стиль, комплексный подход в 
        строительстве, безопасность -главные составляющие 
        уникальности микрорайона «Новый-2».Все фасады домов 
        выполнены из лицевых стеновых камней производства АО 
        «Завод ЖБК-1», что обеспечивает отсутствие необходимости 
        ремонта фасадов в течение всего срока службы зданий.
      </p>

      <div class="nekr__button">Подробнее</div>
    </div>
  </div>


  <div class="supreal__nekr nekr">
    <div class="nekr__images" @mouseleave="clearImg">
      <img class="nekr__img" src="/v4sources/img/subreal/severs/1.jpg"
        style="margin-top: 40px;"
        @mouseenter="showImg"
      >
      <img class="nekr__img" src="/v4sources/img/subreal/severs/2.jpg"
        style="margin-bottom: -300px"
        @mouseenter="showImg"
      >
      <img class="nekr__img nekr__img_last" src="/v4sources/img/subreal/severs/3.jpg"
        style="margin-bottom: -100px"
        @mouseenter="showImg"
      >
    </div>

    <div class="nekr__content">
      <h2 class="nekr__title">Северная звезда</h2>

      <p class="nekr__desc">
        Территория ЖК «Северная звезда» призвана стать пространством для обучения, 
        взаимодействия, здоровья, работы и спорта

        <br><br>

        Здесь будут учебные заведения, физкультурно-оздоровительные 
        центры и медицинские сервисы, развивающие центры, 
        зоны для мастер-классов, студии и многое другое.

        <br><br>

        Проект разбивает стереотип о «спальном районе», 
        так как в нем сочетаются функциональности 
        городской среды и жизни за городом на природе. Местом 
        притяжения станет центральный бульвар, 
        где будут реализованы различные сценарии для отдыха жителей ЖК «Северная звезда».
      </p>

      <div class="nekr__button">Подробнее</div>
    </div>
  </div>

  

</section>
</template>

<style scoped>
.subreal {
  height: calc(100vh - 60px);
  overflow: scroll;
}

.subreal::-webkit-scrollbar {
  display: none;
}

.subreal__slide {
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 60px;
  height: 80%;
}


.subreal__tiles {
  padding: 40px;
  max-width: 1600px;
  box-sizing: border-box;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: dense;
  gap: 30px;
}

.subreal__tile{
  width: 100%; min-height: 300px;
  transition: .3s;
}

.subreal__tile:hover {
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, .1);
  transform: scale(1.02);
}


.subreal__tile_big {
  grid-row: span 2;
  grid-column: span 2;
}

.nekr {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 170px 0;
  margin: 80px auto;
}

.nekr__images {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.nekr__img {
  width: 100%; height: 500px;
  object-fit: cover;
  object-position: center;
  margin-right: -400px;
  border: 4px solid white;
  border-radius: 10px;
  transition: .3s;
  z-index: 7;

}

.nekr__img_last { margin-right: -400px }
.nekr__img_top { margin-top: -200px }
.nekr__img_bot { margin-bottom: -200px }

.nekr__img_inactive {
  transform: scale(.9);
  opacity: .2;
  filter: blur(1px);
  z-index: 1;
}


.nekr__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  position: absolute;
  bottom: 0; left: 200px;

  color: white;
  /* border: 5px solid white; */
  padding: 40px 60px;
  width: 500px;
  border-radius: 20px;

  background: linear-gradient(
    70deg,
    rgba(41, 128, 185, .9),
    rgb(0, 78, 129, .9)
  );

  z-index: 9;
}

.nekr__title {
  margin: 0; padding: 0;
}

.nekr__desc {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
}

.nekr__button {
  padding: 12px 50px;
  border: 1px solid rgba(255, 255, 255, .6);
  font-size: 18px;
  font-weight: 200;
  transition: .3s;
}

.nekr__button:hover {
  background-color: rgba(255, 255, 255, .8);
  color: rgba(0, 0, 0, .8);
}

</style>