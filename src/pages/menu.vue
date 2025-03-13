<script setup>
import { animate, stagger } from 'motion';
import { onMounted, ref } from 'vue';

let pager = [
  { text: 'Корпорация', submenu: 'corp',
    cover:'/public/v4sources/img/tstm.jpg'
  },
  { text: 'Недвижимость', submenu: 'real',
    cover:'/public/v4sources/img/13.jpg'
  },
  { text: 'Завод', submenu: 'build',
    cover:'/public/v4sources/img/18.jpg'
  },
  { text: 'ЖНК', submenu: 'jnk',
    cover:'/public/v4sources/img/12.jpg'
  },
]

let menuList = {
  corp : [
    {
      title: 'О компании',
      img: '/public/v4sources/img/corp.jpg', 
      style: 'grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/2.jpg', title: 'Структура корпорации',
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'Новости',
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'Акции и скидки',
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'Галерея',
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'Благотворительность',
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'Вакансии',
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Контакты',
    },
  ],

  real : [
    {
      img: '/public/v4sources/img/2.jpg', title: 'Информация о застройщике',
      style: 'grid-column: span 3; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'Объекты строительства',
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'Прайс-лист на недвижимость',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'Вторичная недвижимость',
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'Коммерческая недвижимость',
      style: 'grid-column: span 3; grid-row: span 2;',
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'Акции и скидки',
      // style: 'grid-column: span 2; grid-row: span 4;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Как купить',
      // style: 'grid-column: span 4; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Кредитный калькулятор',
      // style: 'grid-column: span 4; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Новости',
      // style: 'grid-column: span 4; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Контакты',
      // style: 'grid-column: span 4; grid-row: span 2;'
    },
  ],

  build : [
  {
      img: '/public/v4sources/img/corp.jpg', title: 'О компании',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/2.jpg', title: 'Структура корпорации',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'Новости',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'Акции и скидки',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'Галерея',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'Благотворительность',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'Вакансии',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'Контакты',
      // style: 'grid-column: span 4; grid-row: span 2;'
    },
  ],

  jnk : [
    {
      img: '/public/v4sources/img/2.jpg', title: 'test',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'test',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'test',
      style: 'grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'test',
      style: 'grid-row: span 2'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'test',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'test',
      // style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'test',
      // style: 'grid-column: span 2; grid-row: span 2;'
    },
  ],
}



let currentMenu = ref(menuList.corp)
let currentBack = ref(pager[0]['cover']) 



async function changeSubMenu (index) {
  let menuHolder = document.querySelectorAll('.menup__mosaic')
  let menuCover = document.querySelectorAll('.menup__back')
  
  let newMenu = pager[index]['submenu']
  let newCover = pager[index]['cover']


  await animate(
    menuHolder,
    { opacity: 0, translateX: '-30px'},
    { duration: .4 }
  )

  currentMenu.value = menuList[newMenu]

  setTimeout(() => {
      animate(
      menuHolder,
      { opacity: [0, 1], translateX: ['30px', '0px']},
      { duration: .4, delay: stagger(0.02) }
    )
  }, 300);

  await animate(
    menuCover,
    { opacity: 0 },
    { duration: .4 }
  )

  currentBack.value = newCover

  await animate(
    menuCover,
    { opacity: 1 },
    { duration: .4 }
  )


}
</script>

<template>
  <section class="menup">
    <ul class="menup__pager">
      <li class="menup__pagerItem" v-for="(item, index) in pager" :key="index"
        @click="changeSubMenu(index)"
      >
        <div class="menup__pagerBacklight"></div>
        <p class="menup__pagerText">{{ item.text }}</p>
      </li>
    </ul>

    <div class="menup__mosCover">
      <div class="menup__mosaicHolder">
        <ul class="menup__mosaic">
          <li class="menup__mosaicItem menuItem" v-for="(item, index) in currentMenu" :key="index"
            :style="item.style"
          >
            <img class="menup__img" :src="item.img">
            <div class="menup__cover"></div>

            <div class="menup__transformer menup__title">
              <p class="menup__titleText">{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style scoped>

.menup {
  padding: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  max-width: 1500px;
  padding-top: 60px;
  gap: 20px;

  font-size: 16px;
}

.menup__pager {
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;

  border-width: 1px 0px;
  border-style: solid;
  border-color:rgba(0, 0, 0, .5);
  background: rgba(255, 255, 255, .2);

  letter-spacing: 2px;
  font-size: 18px;
}


.menup__pagerItem {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 30px 0px;
  cursor: pointer;
  transition: .3s;
}

.menup__pagerItem:hover {
  color: white;
}


.menup__pagerItem:hover .menup__pagerBacklight{
  opacity: 1;
  width: 100%;
}

.menup__pagerBacklight {
  position: absolute;
  width: 0%; height: 100%;
  background: #74b9ff;
  opacity: 0;
  transition: .4s;
}

.menup__pagerText {
  margin: 0; padding: 0;
  position: absolute;
}


.menup__mosCover {
  flex-grow: 1;
  position: relative;
}


.menup__mosCover::before {
  content: '';
  position: absolute;
  height: 100px; width: 100%;
  left: 0; top: 0;

  /* background: #74b9ff; */
  background: linear-gradient(
    to bottom, 
    rgba(255, 255, 255, 1), 
    rgba(0, 0, 0, 0
  ));

  z-index: 2;
}


.menup__mosCover::after {
  content: '';
  position: absolute;
  height: 80px; width: 100%;
  left: 0; bottom: 0;

  /* background: #74b9ff; */
  background: linear-gradient(
    to top, 
    rgba(255, 255, 255, 1), 
    rgba(0, 0, 0, 0
  ));

  z-index: 2;
}



.menup__mosaicHolder {
  position: relative;
  overflow: scroll;
  max-height: 80vh;
}

.menup__mosaicHolder::-webkit-scrollbar {
  display: none;
  opacity: 0;
}



.menup__mosaic {
  display: grid;
  
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(9, 1fr);
  grid-auto-columns: 3fr;
  grid-auto-rows: minmax(200px, 1fr);
  grid-auto-flow: row;


  gap: 40px;
  padding: 0;

  list-style: none; 
  flex-grow: 1;
}

.menup__mosaicItem {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-column: span 3;
  transition: .3s;
}

.menup__mosaicItem:hover {
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .3);
}

.menup__img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

.menup__cover {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: 
    linear-gradient(
      to top left,
      rgba(0, 0, 0, .3),
      rgba(0, 0, 0, 0)
    )
  ;

  transition: .3s;
}

.menup__transformer {
  transform: skewX(40deg) translateX(-20px);
  background: white;
}

.menup__title {
  position: absolute;
  left: 0; bottom: 0;
  margin: 0; padding: 10px 50px;
  font-size: 18px;
}

.menup__titleText {
  transform: skewX(-40deg);
  margin: 0; padding: 0;
  font-size: 16px;
  letter-spacing: 1px;
}

@media (max-width: 1200px) {
  .menup {
    height: 1200px;
  }
}


</style>

