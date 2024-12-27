<script setup>
import Header from './components/header.vue';
import { RouterView } from 'vue-router';




</script>

<template>
  <Header class="header" />
  <router-view />
</template>


<style>
body {
  position: relative;
  margin: 0; padding: 0;
}


.header {
  z-index: 9;
}


</style>