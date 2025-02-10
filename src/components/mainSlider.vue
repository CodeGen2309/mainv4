<script setup>
  import arrowIcon from '@/icons/arrow.svg'

  let test = `${arrowIcon}`
  
</script>


<template>
  <div class="sld">
    <img class="sld__img" src="/public/v4sources/img/4.jpg">
    <div class="sld__cover"></div>

    <div class="sld__dock">
      <div class="sld__transformer sld__dockContentHolder">
        <div class="sld__dockContent">
          <p class="sld__dockTitle">Title</p>
        </div>
      </div>

      <div class="sld__transformer sld__dockControlsHolder">
        <div class="sld__dockControls">
          <div class="sld__dockArrow sld__dockBack">
            
          </div>

          <ul class="sld__dockDotList">
            <li class="sld__dockDot"></li>
            <li class="sld__dockDot"></li>
            <li class="sld__dockDot"></li>
          </ul>

          <div class="sld__dockArrow sld__dockNext">
            <img class="sld__dockArrowIcon" src="/public/v4sources/icons/arrow.svg" alt="">
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>


<style>
.sld {
  display: flex;
  position: relative;

  border-radius: 10px;
  overflow: hidden;
}

.sld__img {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

.sld__cover {
  position: absolute;
  width: 100%; height: 100%;
  background: linear-gradient(
    100deg, 
    white 20%,
    rgba(0, 0, 0, 0)
  );
}


.sld__transformer {
  display: flex;
  flex-grow: 1;
  transform: skewX(30deg);
}


.sld__dock {
  display: flex;

  width: 100%; height: 60px;
  position: absolute;
  bottom: 0;
}


.sld__dockContent {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(-30deg);
  
  
  padding: 0 20px;
  box-sizing: border-box;
  flex-grow: 1;
}


.sld__dockContentHolder {
  background: white;
}


.sld__dockTitle {
  margin: 0; padding: 0;
}


.sld__dockControls {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
  transform: skewX(-30deg);
}

.sld__dockControlsHolder {
  background: rgba(0, 0, 0, .5);
  padding: 0 20px;
  margin-right: -20px;
}

.sld__dockArrow {
}

.sld__dockArrowIcon {
  color: white;
}

.sld__dockBack {}

.sld__dockNext {}

.sld__dockDotList {
  display: flex;
  margin: 0; padding: 0;
  list-style: none;
  gap: 20px;
}

.sld__dockDot {
  display: block;
  width: 10px; height: 10px;
  background: white;
  border-radius: 5px;
}
</style>