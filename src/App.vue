<script setup>
import Header from './components/header.vue';
import { RouterView } from 'vue-router';




</script>

<template>
  <Header class="header" />
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
  transition: .3s;
}
</style>