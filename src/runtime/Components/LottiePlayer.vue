<script lang="ts" setup>
import lottie from 'lottie-web';
import { watchEffect, ref } from 'vue';

const config = defineProps<{
  data: Object,
  loop?: Boolean,
  autoplay?: Boolean,
}>()

const animationContainer = ref(null);

watchEffect(() => {
  if (animationContainer.value) {
    const animation = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: 'svg',
      loop: config.loop !== false,
      autoplay: config.autoplay !== false,
      animationData: config.data,
    });

    defineExpose({ animation })
  }
})


</script>

<template>
  <div ref="animationContainer" />
</template>