<script setup>
import data from './assets/pacman.json'
</script>

<template>
  <section>
    <LottiePlayer
      style="width: 50%;"
      :data="data"
      :loop="true"
      :autoplay="true"
    />    
  </section>
</template>

