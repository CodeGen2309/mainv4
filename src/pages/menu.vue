<script setup>
import { animate, stagger } from 'motion';
import { onMounted, ref } from 'vue';

let pager = [
  { text: 'Корпорация', submenu: 'corp',
    cover:'/public/v4sources/img/13.jpg'
  },
  { text: 'Недвижимость', submenu: 'real',
    cover:'/public/v4sources/img/1.jpg'
  },
  { text: 'Завод', submenu: 'build',
    cover:'/public/v4sources/img/16.jpg'
  },
  { text: 'ЖНК', submenu: 'jnk',
    cover:'/public/v4sources/img/12.jpg'
  },
]

let menuList = {
  corp : [
    {
      img: '/public/v4sources/img/1.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/2.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'test',
      style: 'grid-column: span 4; grid-row: span 2;'
    },
  ],

  real : [
    {
      img: '/public/v4sources/img/2.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'test',
      style: 'grid-column: span 4; grid-row: span 2;'
    },
  ],

  build : [
    {
      img: '/public/v4sources/img/2.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'test',
      style: 'grid-column: span 4; grid-row: span 2;'
    },
  ],

  jnk : [
    {
      img: '/public/v4sources/img/2.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/3.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/4.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/5.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/6.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 2;'
    },
    {
      img: '/public/v4sources/img/7.jpg', title: 'test',
      style: 'grid-column: span 2; grid-row: span 3;'
    },
    {
      img: '/public/v4sources/img/8.jpg', title: 'test',
      style: 'grid-column: span 4; grid-row: span 2;'
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
    <div class="menup__back">
      <img class="menup__backImg" :src="currentBack">
      <div class="menup__backFilter"></div>
    </div>

    <ul class="menup__pager">
      <li class="menup__pagerItem" v-for="(item, index) in pager" :key="index"
        @click="changeSubMenu(index)"
      >
        <div class="menup__pagerBacklight"></div>
        <p class="menup__pagerText">{{ item.text }}</p>
      </li>
    </ul>

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
  </section>
</template>


<style scoped>

.menup {
  padding: 70px 100px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
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

  margin: 20px; padding: 0;
  letter-spacing: 2px;
  font-size: 20px;
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

.menup__back {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.menup__backFilter {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    120deg,
    white 60%,
    rgba(0, 0, 0, .2)
  );
}

.menup__backImg {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}


.menup__mosaic {
  display: grid;
  

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;

  margin: 0; padding: 0px 20px;
  padding-top: 30px;
  gap: 40px;

  list-style: none; 
  flex-grow: 1;
}

.menup__mosaicItem {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
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
  font-size: 21px;
  letter-spacing: 1px;
}

</style>

