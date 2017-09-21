<template>

  <div class="shots">

    <hr/>

    <div class="container">
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('all')">All</a>
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('portraits')">Portraits</a>
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('nature')">Landscape &amp; Nature</a>
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('city')">City</a>
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('soft')">Soft</a>
      <a class="button" style="margin-left: 25px;" v-on:click="showOnly('others')">Others</a>
    </div>

    <carousel-3d v-if="showAll" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in slides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

    <carousel-3d v-if="showOthers" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in otherSlides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

    <carousel-3d v-if="showPortraits" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in portraitSlides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

    <carousel-3d v-if="showNature" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in natureSlides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

    <carousel-3d v-if="showCity" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in citySlides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

    <carousel-3d v-if="showSoft" :controls-visible="true" :width="1000" :height="667">
      <slide v-for="(slide, i) in softSlides" :index="i">
        <span><img v-bind:src="slide.extension"></span>
      </slide>
    </carousel-3d>

  </div>

</template>

<script>

  export default {
    name: 'home',
    props: {
      msg: {
        type: String,
        default: 'Welcome'
      }
    },
    data(){
      return {
        showAll: true,
        showPortraits: false,
        showCity: false,
        showNature: false,
        showOthers: false,
        showSoft: false,
        slides:[
          {extension: '/static/images/portraits/0.jpg'},
          {extension: '/static/images/city/1.jpg'},
          {extension: '/static/images/nature/2.jpg'},
          {extension: '/static/images/others/3.jpg'},
          {extension: '/static/images/soft/4.jpg'},
        ],
        portraitSlides:[
          {extension: '/static/images/portraits/0.jpg'},
        ],
        citySlides:[
          {extension: '/static/images/city/1.jpg'},
        ],
        natureSlides:[
          {extension: '/static/images/nature/2.jpg'},
        ],
        otherSlides:[
          {extension: '/static/images/others/3.jpg'},
        ],
        softSlides:[
          {extension: '/static/images/soft/4.jpg'},
        ],
      }
    },
    methods: {
      showOnly: function(type){
        if (type == 'all'){
          this.showAll = true;
          this.showPortraits= false;
          this.showCity= false;
          this.showNature= false;
          this.showOthers= false;
          this.showSoft= false;
        } else if (type == 'portraits'){
          this.showAll = this.showSoft = this.showOthers = this.showNature = this.showCity = false;
          this.showPortraits = true;
        } else if (type == 'city') {
          this.showAll = this.showSoft = this.showOthers = this.showNature = this.showPortraits = false;
          this.showCity = true;
        } else if (type == 'soft') {
          this.showAll = this.showCity = this.showOthers = this.showNature = this.showPortraits = false;
          this.showSoft = true;
        } else if (type == 'others') {
          this.showAll = this.showSoft = this.showCity = this.showNature = this.showPortraits = false;
          this.showOthers = true;
        } else if (type == 'nature') {
          this.showAll = this.showSoft = this.showOthers = this.showCity = this.showPortraits = false;
          this.showNature = true;
        }
      }
    },
    computed: {

    }
  }

</script>

<style scoped>

</style>
