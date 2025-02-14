<script setup>
 import subMenu from '/mocks/testSubMenu.json'
</script>

<template>
  <div class="extMenu">
    <ul class="extMenu__list">
      <li class="extMenu__listItem" v-for="item in subMenu" :key="item.text">
        <a class="extMenu__link" :href="item.link">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.extMenu {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}


.extMenu__list {
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 30px;
  list-style: none;
}


.extMenu__listItem {}
.extMenu__link {
  color: inherit;
  text-decoration: none;
  display: block;
}


</style>