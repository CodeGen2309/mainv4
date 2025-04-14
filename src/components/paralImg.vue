<script setup>
let props = defineProps(['img', 'delta'])

let dstart = `${props.delta}%`
let dend = `-${props.delta}%`


</script>


<template>
  <img class="prlx" :src="img">
</template>


<style scoped>
.prlx {
  object-fit: cover;
  object-position: center;

  animation: fly linear both;
  animation-timeline: view();
}

@keyframes fly {
  0% {
    transform: translateY(v-bind('dstart'));
    opacity: 0;
  }
  30% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(v-bind('dend'));
    opacity: 0;
  }
}
</style>