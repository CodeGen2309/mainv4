<script setup>
import { onMounted } from 'vue'
import { animate, inView } from 'motion'

import products from '/mocks/newproducts.js';
import productCard from '@/components/productCard.vue';

let section = [
{
    title: 'Фантазия',
    img: '/v4sources/img/products/fantazy.jpg',
    price: 720,
    class: 'tst__card_big',
  },

  {
    title: 'Атлант',
    img: '/v4sources/img/products/atlant.jpg',
    price: 1200,
  },

  {
    title: 'Фантазия',
    img: '/v4sources/img/products/fantazy.jpg',
    price: 720,
  },

  {
    title: 'Классико',
    img: '/v4sources/img/products/klassiko.jpeg',
    price: 400,
  },

  {
    title: 'Виллано',
    img: '/v4sources/img/products/villano.jpg',
    price: 327,
  },
]

</script>

<template>
<section class="subzavod">
  <div class="bigsldier">
    <img class="bgs__image" src="/public/v4sources/img/subzavod/4.jpg">
    <div class="bgs__cover"></div>
    <div class="bgs__content">
      <h2 class="bgs__title">Малые архитектурные формы</h2>
      <p class="bgs__footnote">Скамьи, беседки, урны</p>

      <p class="bgs__desc">
        Создать практичный и красивый ландшафт невозможно без растительности 
        и малых архитектурных форм (МАФов). Эти конструкции украшают окружающее 
        пространство. Наряду с эстетической составляющей, они имеют практическое 
        значение, дополняя городскую среду или придомовую территорию.
      </p>

      <div class="bgs__button">Перейти в каталог</div>
    </div>
  </div>

  <div class="smenu__link">
    Тротуарная плитка
    <div class="smenu__linkdec"></div>
    <div class="smenu__linkdec_bot"></div>
  </div>


  <div class="sz__prodSection">
    <productCard class="tst_card"
      v-for="item in section" :key="item.title" 
      :class="item.class"
      :img="item.img" :price="item.price"
      :title="item.title"
      :desc="item.desc"
    />

    <div class="full__catalog">Полный каталог</div>
  </div>
  
  <div class="sz__banner">
    <img class="sz__banner_img" src="/public/v4sources/img/banner.jpg" alt="">
  </div>
  
  <div class="smenu__link">
    Рядовой камень
    <div class="smenu__linkdec"></div>
    <div class="smenu__linkdec_bot"></div>
  </div>

  <div class="sz__prodSection">
    <productCard class="tst_card"
      v-for="item in section" :key="item.title" 
      :class="item.class"
      :img="item.img" :price="item.price"
      :title="item.title"
      :desc="item.desc"
    />

    <div class="full__catalog">Полный каталог</div>
  </div>
  
  <div class="sz__banner">
    <img  class="sz__banner_img" src="/public/v4sources/img/frame.jpg" alt="">
  </div>

</section>
</template>

<style scoped>
.subzavod {
  height: calc(100vh - 50px);
  overflow: scroll;
}

.subzavod::-webkit-scrollbar {
  display: none;
}

.bigsldier {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%; height: 750px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.bgs__image {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(1.5) sepia(.2);
}

.bgs__image_back {
  width: 110%; height: 110%;
  position: absolute;
  object-fit: cover;
  filter: blur(5px);
}

.bgs__cover {
  position: absolute;
  width: 100%; height: 100%;
  background: linear-gradient(
    120deg,
    /* rgba(41, 128, 185, 1), */
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .8),
    rgba(0, 0, 0, .1),
    rgba(0, 0, 0, 0)
    /* rgba(241, 196, 15, .1) */
  );
}

.bgs__content {
  display: flex;
  flex-direction: column;
  align-items: start;

  position: absolute;
  color: white;
  left: 40px; height: 100%;
  width: 50%;
  padding-top: 150px;
  box-sizing: border-box;

  font-family: 'Montserrat';
  letter-spacing: 2px;
}


.bgs__title {
  margin: 4px 0; padding: 0;
}

.bgs__footnote {
  margin: 0; padding: 0;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
}

.bgs__desc {
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 3px;
  margin: 40px 0;
  margin-bottom: 100px;
}

.bgs__button {
  padding: 20px 40px;
  border: 1px solid rgba(255, 255, 255, .5);
  transition: .3s;
}

.bgs__button:hover {
  background: rgba(255, 255, 255, .7) ;
  color: rgba(0, 0, 0, .8);
}

.sz__prodSection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 20px;

  margin: 60px auto;
  max-width: 1400px;
}

.tst_card {
  width: 100%; height: 100%;
  transition: .3s;
}

.tst_card:hover {
  transform: scale(1.05);
}

.tst__card_big {
  grid-column: span 2;
  grid-row: span 2;
}


.smenu__link {
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 24px;
  font-family: 'Montserrat';
  letter-spacing: 4px;
  padding: 5px 0;
  margin: 100px auto 50px auto;
  max-width: 1400px;


  transition: .3s;
}


.smenu__linkdec {
  position: absolute;
  bottom: 0; left: 0;
  width: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  transition: .5s;
}

.smenu__linkdec_bot {
  position: absolute;
  bottom: -4px; left: 0;
  width: 30%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  transition: .5s;
}

.full__catalog {
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  padding: 40px 0 14px 10px;
  padding-left: 20px;
  font-family: 'Montserrat';
  transition: .3s;
  cursor: pointer;
  width: 100%;
}

.full__catalog:hover {
  width: 120%;
  padding-left: 40px;
}

.sz__banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
}

.sz__banner_img {
  width: 1400px;
}


</style>