<template>
  <div id="app">
    
  </div>
</template>

<script>
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import quickMenu from 'vue-quick-menu'

export default {
  name: 'app',
  components: {
    Home, Work, Contact, Carousel3d, Slide, quickMenu
  }
}
</script>

<style>

</style>
