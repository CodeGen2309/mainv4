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


  // onMounted(() => { startSlider() })
</script>


<template>
  <div class="sld" @mouseenter="stopSlider" @mouseleave="startSlider">
    <div class="sld__slides">
      <img class="sld__img" loading="lazy"
        v-for="(item, index) in slidesData" :key="index"
        :class="{ 'sld__inactiveSlide': currentSlide != index }"
        :src="item.img"
      >
    </div>

    <div class="sld__thumbs thumbs">
      <img :src="item.img" v-for="(item, index) in slidesData" :key="index"
        class="thumbs__img" @click="toggleSlide(index)"
      >
    </div>
  </div>
  
</template>


<style scoped>
.sld {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  gap: 10px;
}

.sld__slides {
  position: relative;
  width: 100%; height: 100%;
  border-radius: 10px;
  overflow: hidden;
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

.sld__thumbs {
}

.thumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  gap: 10px;
}

.thumbs__img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  flex-grow: 1;
  filter: brightness(.8);
}
</style>