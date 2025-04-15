<script setup >

let props = defineProps([
  'img', 'price', 'title', 'desc',
])

</script>

<template>
  <div class="pcard">
    <img class="pcard__image" :src="props.img" >
    <p class="pcard__price"> от {{ price }} руб.</p>
    <p class="pcard__title">{{ title }}</p>
  </div>
</template>

<style scoped>
.pcard {
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2);
}

.pcard__image {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

.pcard__price {
  border-radius: 0 10px 0 0;
  background: white;
  position: absolute;
  margin: 0; padding: 10px 20px;
  font-weight: 300;
  bottom: 50px;
}

.pcard__title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-height: 50px;

  margin: 0; padding: 0 20px;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 300;
  letter-spacing: 1px;
}

</style>