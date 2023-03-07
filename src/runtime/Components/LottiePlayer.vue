<script lang="ts" setup>
import lottie from 'lottie-web';
import { onMounted, ref } from 'vue';
import { useFetch } from '#app'

const config = defineProps<{
  data: Object | string,
  loop?: Boolean,
  autoplay?: Boolean,
}>()

const animationContainer = ref(null);
const animationData = ref(config.data) 

if ( typeof config.data === 'string' ) {  
  const { data } = await useFetch(config.data, {
    key: config.data,
  })
  animationData.value = data.value as Object
}

onMounted(() => {
  if (animationContainer.value) {
    const animation = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: 'svg',
      loop: config.loop !== false,
      autoplay: config.autoplay !== false,
      animationData: animationData.value
    })

    defineExpose({ animation })
  }
})


</script>

<template>
  <div ref="animationContainer" />
</template>