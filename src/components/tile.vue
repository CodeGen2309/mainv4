<script setup>
let props = defineProps(['title', 'img'])


</script>


<template>
  <div class="tile">
    <img class="tile__img" :src="props.img">
    <div class="tile__textHolder">
      <p class="tile__text">{{ props.title }}</p>
    </div>
  </div>
</template>


<style>
  .tile {
    width: 100%; height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .tile__img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .tile__textHolder {
    position: absolute;
    bottom: 0; left: 0;
    padding: 15px 60px;
    background: white;

    transform: skewX(30deg) translateX(-10%);
  }

  .tile__text {
    margin: 0; padding: 0;
    transform: skewX(-30deg);
  }
</style>