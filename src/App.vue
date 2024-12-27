<script setup>
import Header from './components/header.vue';
import { RouterView } from 'vue-router';




</script>

<template>
  <Header class="header" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component class="router" :is="Component" />
    </transition>
  </router-view>
</template>


<style>
body {
  position: relative;
  margin: 0; padding: 0;
}


.header {
  z-index: 9;
}


.router {
  transition: .5s;
}

.fade-enter-active, .fade-leave-active {
  opacity: 0;
  /* transform: translateX(-20px); */
  transform: scale(1.02);
}

</style>