<template>
  <div class="loader"> 
    <nuxt-icon name="levarne" filled></nuxt-icon>
  </div>
</template>
  
<style lang="scss" scoped>
.loader {
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 0.7);
  z-index: 9999;
  & .nuxt-icon {
    animation: rotation 2.5s infinite;
    font-size: 48px;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(460deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
}
</style>