<script setup>
import { ref } from "vue";

// let HeadLinks = []
let HeadLinks = [
  {link: '#', text: 'Завод'},
  {link: '#', text: 'Корпорация'},
  {link: '#', text: 'Недвижимость'},
]

</script>



<template>
<header class="header">
  <div class="header__main">
    <div class="header__inner">
      <img class="header__logo" src="/public/icons/logo.svg">

      <img class="header__menuIcon" 
        src="/public/icons/menu.svg"
      >
    </div>
  </div>


  <div class="header__phone">
    <div class="header__phone__inner">
      <img class="header__phoneImg" src="/icons/phone.svg">
      <p class="header__phoneText"> +7 (4722) 37-63-33 </p>
    </div>
  </div>
</header>
</template>



<style scoped>

.header {
  position: absolute;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;

  box-sizing: border-box;
}

.header__main {
  transform: skewX(-40deg);
  background: white;
  margin-left: -20px;
  padding: 20px 60px;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  transform: skewX(40deg);
}

.header__logo {
  width: 30px;
}

.header__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
  margin: 0; padding: 0;
  flex-grow: 1;
}

.header__menuItem {
  padding: 20px;
  font-weight: 100;
  cursor: pointer;
  transition: .3s;
}

.header__menuItem:hover {
  background: rgba(72, 126, 176, .7);
  color: white;
  font-weight: 500;
  padding: 20px 60px;
}

.header__menuLink {
  text-decoration: none;
  color: inherit;  
}


.header__phone {
  background: white;
  transform: skewX(40deg);
  padding: 20px 40px;
  margin-right: -10px;
}


.header__phone__inner {
  display: flex;
  align-items: center;
  gap: 20px;

  transform: skewX(-40deg);
}


.header__phoneImg {
  opacity: .6;
  width: 30px;
}

.header__phoneText {
  font-weight: 100;
  margin: 0; padding: 0;
  font-size: 18px;
  /* font-weight: 500; */
}


.mainMenu {
  position: absolute;
  top: 60px; left: 0;
  width: 300px;
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);

  transition: .3s;
}

.mainMenu::-webkit-scrollbar {
  display: none;
}

.mainMenu li {
}

.mainMenu a {
  margin: 0; padding: 20px;
}


.header__menuIcon {
  width: 20px;
  cursor: pointer;
  padding-left: 20px;
}



@media (max-width: 500px) {
  .header {
    justify-content: space-between;
    padding: 30px;
  }

  .header__menu {
    display: none;
  }
}

</style>