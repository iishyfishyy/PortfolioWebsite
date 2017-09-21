<template>
 <div>
	<div style="margin-top:3%">
		<div class="container-fluid">
			<div class="row">
				<span class="title">{{title}}</span>
			</div>
			<hr/>
			<div class="row" v-for="post in blogtitles">
				<a href="#" v-on:click="show(post.modalkey)"><span class="blogtitle">{{post.header}}</span></a>
				<br/>
				<br/>
			</div>
		</div>
	</div>
	<modal name="triumf" :adaptive="true" :resizable="true" :scrollable="true" height="800px">
	  <div class="container-fluid">
		<h4>inspiration</h4>
		<div class="row">
		<p>Formerly being developed with ThreeJS, I was inspired and reprogrammed this application to use raw WebGL for performance benefits.
		By using a specific rendering technique, we were able to significantly improve the performance of this web application. 
		An example of such improvement: in ThreeJS, to fade a line, you must redraw the same line multiple times with a lower opacity
		each render. In raw WebGL, you have more control over how everything is rendered, allowing you to render just one line, and use
		a swap framebuffer to fade the line away, resulting in a significant performance boost.
		</p>
		</div>
		<div class="row">
		<h4>what it does</h4>
		<p>The oscilloscope accepts UDP packet data and plots the incoming data on a canvas. This application was initially developed to
		be used for TRIUMF's Alpha G project, 
		but is to be released as an open source project in the future for physicists.
		</p>
		</div>
		<div class="row">
		<h4>built with</h4>
		<dl>
			<dt>NodeJS</dt>
			<dt>AngularJS</dt>
			<dt>ThreeJS</dt>
			<dt>GruntJS</dt>
			<dt>WebGL</dt>
			<dt>SocketIO</dt>
		</dl>
		</div>
	  </div>
	</modal>
 </div>
</template>



<script>

  export default {
    name: 'blog',
    props: {
      msg: {
        type: String,
        default: 'blog'
      }
    },
    data(){
      return {
		title:"blog area",
		blogtitles: [
					{header:'TRIUMF work experience',modalkey:'triumf'},
					{header:'University tutor experience',modalkey:'tutor'},
					{header:'University teaching assistant experience',modalkey:'ta'},
					{header:'International Data Systems work experience',modalkey:'ids'},
					],
		

      }
    },
	components: {
	
	},
    methods: {
	show: function(modalname) {
		this.$modal.show(modalname);
	  },
	  hide: function(modalname) {
		this.$modal.hide(modalname);
	  }
    },
    computed: {

    }
  }

</script>

<style scoped>


.title{
font-size: 2em;
font-family: 'Source Code Pro', monospace;
}

.blogtitle{
font-size: 1.5em;
font-family: 'Source Code Pro', monospace;
}

a {
color:#000000;
}

a span {
color:#000000;
}

p {
font-size: 1em;
font-family: 'Source Code Pro', monospace;
}

.text {
margin-left: 5%;
font-size: 2em;
font-family: 'Source Code Pro', monospace;
width: 60%;
}
</style>
