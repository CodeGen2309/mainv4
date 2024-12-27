<script setup>
import tile from '../components/tile.vue';

let mytiles = [
  {title: 'Строительные материалы', img: '/public/img/tiles/corp/akcii.jpg'},
  {title: 'Купить квартиру', img: '/public/img/tiles/corp/nedvnew.jpg'},
  {title: 'Коммерческая недвижимость', img: '/public/img/tiles/corp/kommnew.jpg'},
]



</script>

<template>
  <section class="app">
    <div class="app__top">
      <div class="app__content">
        <div class="app__titleHolder">
          <h1 class="app__title">Корпорация ЖБК - 1</h1>
          <p class="app__subtitle">мы строим города</p>
        </div>
        

        <div class="app__linkList">
          <RouterLink class="app__link" to="/">Корпорация</RouterLink>
          <RouterLink class="app__link" to="/real">Недвижимость</RouterLink>
          <RouterLink class="app__link" to="/zavod">Завод</RouterLink>
        </div>

        <div class="app__icons">
          <img class="app__icon" src="/public/icons/vk.svg">
          <img class="app__icon" src="/public/icons/telegram.svg">
          <img class="app__icon" src="/public/icons/youtube.svg">
        </div>
      </div>

      <div class="app__imgHolder">
        <div class="app__imgCover"></div>
        <img class="app__img" src="/public/img/corp.jpg">
      </div>
    </div>

    <ul class="app__tileList">
      <li v-for="item in mytiles" class="app__tileItem" :key="item.title">
        <tile class="app__tile" :title="item.title" :img="item.img"></tile>
      </li>
    </ul>
  </section>
</template>


<style scoped>
body {
  position: relative;
  margin: 0; padding: 0;
}


.header {
  z-index: 9;
}


.app {
  position: absolute;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 4fr 2fr;
  gap: 20px;

  padding: 20px;
  box-sizing: border-box;
}

.app__top {
  display: flex;
  gap: 20px;

  border-radius: 10px;
  overflow: hidden;
}

.app__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  gap: 50px;
  padding: 20px;
  padding-top: 100px;

  box-sizing: border-box;
  flex-grow: 1;
}

.app__title {
  font-size: 30px;
  width: 110%;
  color: rgba(0, 0, 0, .8);
  letter-spacing: 5px;
  padding: 10px 0; margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}


.app__subtitle {
  margin: 0; padding: 10px 0;
  font-weight: 100;
  letter-spacing: 2px;
}


.app__linkList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: .3s;
}


.app__link {
  text-decoration: none;
  color: inherit;
  font-weight: 100;
  letter-spacing: 2px;

  cursor: pointer;
  transition: .3s;
}


.app__link:hover {
  padding: 0 10px;
}

.app__icons {
  display: flex;
  gap: 30px;
}

.app__icon {
  width: 50px; height: 50px;
  cursor: pointer;
  transition: .3s;
}


.app__icon:hover {
  transform: scale(1.2);
}


.app__imgHolder {
  position: relative;
  flex-grow: 1;
}

.app__imgCover {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;

  background: linear-gradient(
    110deg,
    white 20%,
    rgba(255, 255, 255, 0)
  );
}


.app__img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}


.app__tileList {
  list-style: none;
  margin: 0; padding: 0;

  display: flex;
  gap: 20px;
}

.app__tileItem {
  flex-grow: 1;
  border-radius: 10px;
  /* overflow: hidden; */

  cursor: pointer;
  transition: .3s;
}


.app__tileItem:hover {
  transform: translateX(4px) translateY(-4px);
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
}


</style>