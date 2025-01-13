<script setup>
let links = [
  {link: '/', text: 'Корпорация'},
  {link: '/real', text: 'Недвижимость'},
  {link: '/zavod', text: 'Завод'},
]

</script>


<template>
<div class="smenu">
  <div class="smenu__titleHolder">
    <h1 class="smenu__title">Компания ЖБК - 1</h1>
    <p class="smenu__subtitle">Созидание во имя повышения качества жизни</p>
    <!-- <p class="smenu__subtitle">Белгород</p> -->
  </div>


  <div class="smenu__linkList">
    <p v-for="item in links" class="smenu__link"
      :key="item.link"
      @click="$emit('goClick', item.link)"
      :class="{'smenu__link_active': item.link == $route.path}"
    >
      {{ item.text }}
    </p>
  </div>


  <div class="smenu__icons">
    <img class="smenu__icon" src="/public/icons/vk.svg">
    <img class="smenu__icon" src="/public/icons/telegram.svg">
    <img class="smenu__icon" src="/public/icons/youtube.svg">
  </div>
</div>
</template>



<style>
.smenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;

  gap: 50px;
  padding: 20px;
  padding-top: 90px;

  box-sizing: border-box;
}

.smenu__title {
  font-size: 30px;
  color: rgba(0, 0, 0, .8);
  letter-spacing: 5px;
  padding: 10px 0; margin: 0;
  font-family: 'zekton';
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}


.smenu__subtitle {
  margin: 0; padding: 10px 0;
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'czizh';
}


.smenu__linkList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: .3s;
}


.smenu__link {
  text-decoration: none;
  color: inherit;
  font-weight: 100;
  font-size: 130%;
  letter-spacing: 4px;
  margin: 0; padding: 0;

  cursor: pointer;
  transition: .3s;
}


.smenu__link:hover {
  /* padding: 0px 10px; */
  transform: scale(1.1) translateX(30px);
}

.smenu__link_active {
  /* font-size: 21px;   */
  /* transition: .3s; */
}


.smenu__icons {
  display: flex;
  gap: 30px;
}

.smenu__icon {
  width: 50px; height: 50px;
  cursor: pointer;
  transition: .3s;
}


.smenu__icon:hover {
  transform: scale(1.2);
}



</style>