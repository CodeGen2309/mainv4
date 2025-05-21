<script setup>
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';
import router from '@/router';

let props = defineProps({
  'links': {default: []}, 
  'img': {default: ''}, 
  'title': {default: 'test title'}, 
  'desc': {default: 'test desc'},
  'backColor': {default: 'rgba(0, 0, 0, .5)'},
  'frontColor': {default: 'rgba(0, 0, 0, .5)'},
})

function startAnim () {
  let covers, textItems, image, textCover

  covers = document.querySelectorAll('.vBack__cover')
  textItems = document.querySelectorAll('.vCont_anim')
  image = document.querySelector('.vBack__img')
  
  animate('.vBack__cover', { skewX: '20deg' })

  animate(
    covers, 
    { translateX: ['-90%', '0'], opacity: [0, 1] },
    { duration: .8, delay: stagger(0.1) },
    // { duration: 1.2, delay: .5 }
  )


  animate(
    textItems, 
    { 
      opacity: [0, 1], 
      translateX: ['50px', '0'] 
    },
    { duration: .6, delay: .2 }
  )
}

function gotoLink (link) {
  let background, textHolder, textCover

  background = document.querySelectorAll('.vBack__cover')
  textCover = document.querySelectorAll('.vBack__cover_third')
  textHolder = document.querySelectorAll('.vBack__content')

  animate(
    textHolder, 
    { 
      translateX: '30px',
      scale: '1.02',
      opacity: 0
    },
    { duration: 1 }
  )

  animate(textCover, { opacity: 0 }, { duration: .5 })

  animate(
    background, 
    { 
      width: '150%',
      background: 'rgba(0, 0, 0, 1)'
    },
    { duration: 1 }
  )

  setTimeout(() => {
    router.push({ path: link, replace: true })
  }, 800);

}

onMounted(() => {
  startAnim()
})
</script>



<template>
  <div class="vBack">
    <img :src="props.img" class="vBack__img">

    <div class="vBack__cover vBack__cover_first vBack__cover_empty"
      :style="`background: ${props.backColor}`"
    ></div>

    <div class="vBack__cover vBack__cover_second vBack__cover_empty"
      :style="`background: ${backColor}`"
    ></div>

    <div class="vBack__cover vBack__cover_third"
      :style="`background: ${props.frontColor}`"
    ></div>

    <div class="vBack__content vCont">
      <h1 class="vCont__title vCont_anim">{{ title }}</h1>
      <p class="vCont__desc vCont_anim" v-html="props.desc"></p>

      <div class="vCont__buttons vCont_anim">
        <p v-for="l in links" :to="l.link"
          @click="gotoLink(l.link)"
          :key="l.text" class="vCont__buttonItem">
          {{ l.text }}
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.vBack {
  position: relative;
  width: 100%; height: 80vh;
  overflow: hidden;
}

.vBack__img {
  opacity: 1;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;

}

.vBack__cover  {
  position: absolute;
  top: 0; left: -20%;
  opacity: 1;
  width: 65%; 
  height: 100%;
}

.vBack__cover_first {
  width: calc(65% + 60px);
}


.vBack__cover_second {
  width: calc(65% + 30px);
}

.vBack__cover_third {
}

.vBack__content {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 60px;

  padding: 40px;
  box-sizing: border-box;
  color: aliceblue;
}

.vCont {}

.vCont__title {
  position: relative;
  margin: 0; padding: 0;
  font-size: 30px;
  font-family: zekton;
  letter-spacing: 3px;
  font-weight: 300;
  transition: .3s;
}

.vCont__title::before {
  content: '';
  width: 100%; height: 100%;
  top: 0; left: 0;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  border-right: 1px solid rgba(255, 255, 255, .5);
  transform: translateX(30px) translateY(5px);
}


.vCont__title::after {
  content: '';
  width: 100%; height: 100%;
  top: 0; left: 0;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  border-right: 1px solid rgba(255, 255, 255, .5);
  transform: translateX(35px) translateY(10px);
}

.vCont__desc {
  font-size: 16px;
  margin: 0; padding: 0;
  font-weight: 400;
  letter-spacing: 2px;
  transition: .3s;
}

.vCont__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px ;
}

.vCont__buttonItem {
  position: relative;
  display: block;
  text-decoration: none;
  margin: 0; padding: 0;
  background: rgba(255, 255, 255, .2);
  border: 1px solid rgba(255, 255, 255, .6);
  padding: 15px 30px;
  transition: .3s;
  font-family: zekton;
}

.vCont__buttonItem::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  top: 4px; left: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, .6);
  border-right: 1px solid rgba(255, 255, 255, .6);
  transition: .3s;
}

.vCont__buttonItem:hover {
  background: white;
  transform: translateX(-4px) translateY(-4px);
  color: black;
}

</style>