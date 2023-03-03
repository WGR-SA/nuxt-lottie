<script setup>
import data from './assets/wgr_Prestation_strategiedecomm.json'
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

