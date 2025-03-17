<script setup>
  import { onMounted, ref } from 'vue';

  import arrow from './icons/arrow.vue';
  import slidesData from '/mocks/slides.json'

  let currentSlide = ref(0)
  let slideTicker = false
  

  function nextSlide () {    
    let isLastSlide = currentSlide.value >= slidesData.length - 1

    if (isLastSlide) { currentSlide.value = 0 } 
    else { currentSlide.value++ }
  }


  function prevSlide () {
    let isFirstSlide = currentSlide.value <= 0
    let lastSlide = currentSlide.value = slidesData.length - 1 

    if (isFirstSlide) { lastSlide }
    else { currentSlide.value-- }
  }


  function toggleSlide (index) {
    currentSlide.value = index
  }


  function startSlider () {
    slideTicker =  setInterval(() => {
      nextSlide();
    }, 5000);
  }


  function stopSlider () {
    clearInterval(slideTicker)
  }


  onMounted(() => { startSlider() })
</script>


<template>
  <div class="sld" @mouseenter="stopSlider" @mouseleave="startSlider">
    <div class="sld__slides">
      <img class="sld__img" loading="lazy"
        v-for="(item, index) in slidesData" :key="index"
        :class="{ 'sld__inactiveSlide': currentSlide != index }"
        :src="item.img"
      >

      <div class="sld__cover"></div>
    </div>


    <div class="sld__dock"> 
      <div class="sld__transformer sld__dockContentHolder">
        <div class="sld__dockContent">
          <transition-group name = 'slideLeft'>
            <a v-for="(item, index) in slidesData" :key="index"
              class="sld__dockTitle"  v-show="currentSlide == index"
              :href="item.link"
            >
              {{ item.title }}
            </a>
          </transition-group>
        </div>
      </div>

      <div class="sld__transformer sld__dockControlsHolder">
        <div class="sld__dockControls">
          <div class="sld__dockArrow sld__dockBack">
            <arrow class="sld__dockArrowIcon" @click="prevSlide">
            </arrow>
          </div>

          <ul class="sld__dockDotList">
            <li class="sld__dockDot" v-for="(item, index) in slidesData.length" 
              :key="index" @click="toggleSlide(index)"
              :class="{'sld__dockDot_active': currentSlide == index}"
            >
            </li>
          </ul>

          <div class="sld__dockArrow sld__dockNext">
            <arrow class="sld__dockArrowIcon" @click="nextSlide">
            </arrow>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>


<style>
.sld {
  display: flex;
  position: relative;
  overflow: hidden;
}

.sld__cover {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(0, 0, 0, 0) 50%
  );
}

.sld__slides {
  position: relative;
  width: 100%; height: 100%;;
}

.sld__img {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
  transition: .5s;
}

.sld__inactiveSlide {
  opacity: 0;
  transform: translateX(10px);
}


.sld__transformer {
  display: flex;
  flex-grow: 1;
  transform: skewX(30deg);
}


.sld__dock {
  display: flex;

  width: 100%; height: 60px;
  position: absolute;
  bottom: 0;
}


.sld__dockContent {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(-30deg);
  
  
  padding: 0 20px 0 100px;
  box-sizing: border-box;
  flex-grow: 1;  
}


.sld__dockContentHolder {
  position: relative;
  background: white;
  margin-left: -50px;
  width: 50%;
  overflow: hidden;
}


.sld__dockTitle {
  position: absolute;
  margin: 0; padding: 0;
  opacity: 1;

  text-decoration: none;
  color: inherit;
  transition: .4s;
}

.sld__dockControls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  transform: skewX(-30deg);
}

.sld__dockControlsHolder {
  display: flex;
  justify-content: center;

  background: rgba(0, 0, 0, .5);
  padding: 0 20px;
  margin-right: -20px;
}

.sld__dockArrow {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: white;
  width: 30px;
}

.sld__dockArrowIcon {
  fill: white;
  width: 100%; height: 100%;
}

.sld__dockBack {}

.sld__dockNext {
  transform: rotate(180deg);
}

.sld__dockDotList {
  display: flex;
  margin: 0; padding: 0;
  list-style: none;
  gap: 20px;
}

.sld__dockDot {
  display: block;
  width: 10px; height: 10px;
  background: rgba(255, 255, 255, .5);
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
}


.sld__dockDot_active {
  background: white;
}


.slideLeft-enter-active {
  opacity: 0;
  /* transform: translateX(40px); */
}

.slideLeft-leave-active {
  opacity: 0;
  transform: translateX(-40px);
}


@media (max-width: 600px) {
  .sld__dockContentHolder {
    max-width: 100%;
    overflow: hidden;
  }

  .sld__dockControlsHolder {
    display: none;
  }
}

</style>