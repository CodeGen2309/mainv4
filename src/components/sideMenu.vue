<script setup>
// let title = 'Компания ЖБК-1'
let title = 'Группа компаний ЖБК - 1'
let note = 'Созидание во имя повышения качества жизни'
// let note = 'Белгород'

let props = defineProps(['menu'])

</script>


<template>
<div class="smenu">
  <div class="smenu__titleHolder">
    <h1 class="smenu__title">{{ title }}</h1>
    <p class="smenu__subtitle">{{ note }}</p>
  </div>


  <div class="smenu__linkList">
    <div v-for="item in menu" class="smenu__link"
      :key="item.link"
      @mouseenter="$emit('hoverOn', item.submenu)"
    >
      {{ item.text }}

      <div class="smenu__linkdec"></div>
      <div class="smenu__linkdec_bot"></div>
    </div>
  </div>


  <div class="smenu__icons">
    <img class="smenu__icon" src="/public/v4sources/icons/vk.svg">
    <img class="smenu__icon" src="/public/v4sources/icons/telegram.svg">
    <img class="smenu__icon" src="/public/v4sources/icons/youtube.svg">
  </div>
</div>
</template>



<style scoped>
.smenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 50px;
  padding: 20px;
  padding-top: 90px;

  box-sizing: border-box;
}

.smenu__title {
  font-size: 30px;
  color: rgba(0, 0, 0, .8);
  letter-spacing: 4px;
  padding: 10px 0; margin: 0;
  /* font-family: 'zekton'; */
  font-family: 'montserrat';
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}


.smenu__subtitle {
  margin: 0; padding: 10px 0;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
  font-family: 'montserrat';
}


.smenu__linkList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: .3s;
}


.smenu__link {
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 120%;
  font-family: 'zekton';
  letter-spacing: 4px;
  margin: 6px 0; padding: 5px 0;


  cursor: pointer;
  transition: .3s;
}


.smenu__linkdec {
  position: absolute;
  bottom: 0; left: 0;
  width: 20%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  transition: .5s;
}

.smenu__linkdec_bot {
  position: absolute;
  bottom: -4px; left: 0;
  width: 10%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  transition: .5s;
}


.smenu__linkdec_active {
  width: 100%;
}


.smenu__link:hover > .smenu__linkdec {
  width: 70%;
}

.smenu__link:hover > .smenu__linkdec_bot {
  width: 100%;
}



.smenu__link:hover {
  /* letter-spacing: 6px; */
}

.smenu__link_active > .smenu__linkdec {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}

.smenu__link_active > .smenu__linkdec_bot {
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  /* border-bottom: none; */
  width: 100%;
}


.smenu__link_active:hover > .smenu__linkdec {
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  /* border-bottom: none; */
  width: 100%;
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