<script setup>
import Header from './components/header.vue';
import { RouterView } from 'vue-router';
import router from './router';
import { animate } from 'motion';


async function toggleMenu () {
  let curRoute = router.currentRoute.value.name
  let nextRoute = curRoute == 'menu' ? '/' : '/menu'

  await animate(
    document.querySelector('.testComp'),
    { opacity: 0, filter: 'blur(10px)' },
    { duration: .3 }
  )

  router.push(nextRoute)
}


function print (ent) {
  console.log(ent);
}


</script>

<template>
  <Header class="header" 
    @burgerClick="toggleMenu"
  />

  <transition name="testAnim">
    <router-view v-slot="{ Component }">
      <component class="testComp" :is="Component" />
    </router-view>
  </transition>
</template>


<style>
body {
  position: relative;
  margin: 0; padding: 0;
}


.header {
  z-index: 9;
}

.testComp {
  transition: .3s;
}

.testAnim-enter-active, 
.testAnim-leave-active {
  opacity: 0;
  filter: blur(10px);
}
</style>