<script setup>
  import { onMounted, ref } from 'vue';

  import arrow from './icons/arrow.vue';
  import slidesData from '/mocks/slides.json'

  let currentSlide = ref(0)
  let currTitle = ref(slidesData[currentSlide.value].title)
  let slideTicker = false
  

  function nextSlide () {    
    console.log('NEXT SLIDE');
    
    currentSlide.value++
    currTitle = ref(slidesData[currentSlide.value].title)

    if (currentSlide.value >= slidesData.length - 1) {
      currentSlide.value = 0
    }
  }

  function prevSlide () {
    currentSlide.value--
    currTitle = ref(slidesData[currentSlide.value].title)
    
    if (currentSlide.value < 0) {
      currentSlide.value = slidesData.length - 1
    }
  }


  function toggleSlide (index) {
    console.log(`SLIDE INDEX ${index}`);
    currentSlide.value = index
  }


  function startSlider () {
    slideTicker = setInterval(() => {
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
          <p class="sld__dockTitle">{{ currTitle }}</p>
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

  border-radius: 10px;
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

  transform: 
    /* scale(1.05) */
    translateX(10px)
    /* translateY(50px) */
  ;
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
  
  
  padding: 0 20px;
  box-sizing: border-box;
  flex-grow: 1;  
}


.sld__dockContentHolder {
  background: white;
  margin-left: -50px;
}


.sld__dockTitle {
  margin: 0; padding: 0;
}


.sld__dockControls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  flex-grow: 1;
  transform: skewX(-30deg);
}

.sld__dockControlsHolder {
  background: rgba(0, 0, 0, .5);
  padding: 0 20px;
  margin-right: -20px;
}

.sld__dockArrow {
  display: flex;
  justify-content: center;
  align-items: center;

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

</style>