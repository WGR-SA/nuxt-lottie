# Nuxt-Lottie

Nuxt-Lottie is a module for Nuxt.js that provides an easy way to use Lottie animations in your web applications. It includes a LottiePlayer component that wraps the Lottie web library to make it easy to display and control Lottie animations.

## Installation

To install the Nuxt-Lottie module, run the following command in your project directory:

```
npm i @wgr-sa/nuxt-lottie
```

Once installed, add the module to your Nuxt.js configuration file (nuxt.config.js):

```
module.exports = {
  modules: [
    'nuxt-lottie',
  ],
}
```

## Usage

To use the LottiePlayer component, import it in your Vue components and pass the path to your Lottie animation file:

```
<template>
  <div>
    <LottiePlayer :data="data" loop="true" autoplay="true" />
  </div>
</template>
```

The player is exposed in the component and can be accessed via the 'animation' key.

### Documentation

For more information about the Nuxt-Lottie module and the LottiePlayer component, please refer to the official documentation.