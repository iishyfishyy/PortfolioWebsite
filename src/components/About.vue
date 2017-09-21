<template>
 <div>
	<div style="margin-top:3%">
		<div class="container-fluid">
			<div class="row">
				<span class="title">{{title}}</span>
			</div>
			<hr/>
			<div class="row">
				<div class="one-half column">
					<div class="row">
						<a v-on:click="show('webgl')" href="#">WebGL Oscilloscope</a>
					</div>
					<div class="row">
						<img src="../../static/images/oscilloscope.png">
						<modal name="webgl" :adaptive="true" :resizable="true" :scrollable="true" height="800px" style="margin-bottom: 10%;">
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
				</div>
				<div class="one-half column">
					<div class="row">
						<a v-on:click="show('questr')" href="#">Questr</a>
					</div>
					<div class="row">
						<img src="../../static/images/questr.jpg">
						<modal name="questr" :adaptive="true" :resizable="true" :scrollable="true" height="750px" style="margin-bottom: 10%;">
						  <div class="container-fluid">
							<h4>inspiration</h4>
							<div class="row">
							<p>The initial inspiration came from video games. Many games have a "quest" you can finish,
							and this requires you to help someone else. I wondered why we didn't have something similar in real
							life. If people enjoy doing this in video games, it must also apply in real life if they have the chance.
							To expand the paradigm of the application however, Questr deals with any sort of jobs or "quests."
							</p>
							</div>
							<div class="row">
							<h4>what it does</h4>
							<p>Need some plumbing help done but don't wanna have to go through Kijiji 
							or other services to find phone numbers and dial up each plumber? Come to Questr, 
							post a job, and let the rest take care of itself. Whenever someone sees your posted
							job, they can accept it. Once they accept, you and the helper, both, get a confirmation
							text message with each other's phone number so you may get in touch with each other immediately.
							</p>
							</div>
							<div class="row">
							<h4>built with</h4>
							<dl>
								<dt>Twilio API</dt>
								<dd>- for handling SMS services</dd>
								<dt>jQuery</dt>
								<dd>- to add overlay features and AJAX to make database calls</dd>
								<dt>Backstretch</dt>
								<dd>- to allow background image to adjust to screen size</dd>
							</dl>
							</div>
						  </div>
						</modal>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="one-half column">
					<div class="row">
						<a v-on:click="show('paint')" href="#">Paint in Java</a>
					</div>
					<div class="row">
						<img src="../../static/images/paint.jpg">
						<modal name="paint" :adaptive="true" :resizable="true" :scrollable="true" height="500px" style="margin-bottom: 10%;">
						  <div class="container-fluid">
							<h4>inspiration</h4>
							<div class="row">
							<p>This program was made for my Software Development class to demonstrate knowledge of Java SWING components. This was
							great practice to learning how to develop GUI applications before moving on to Qt Application Framework with Python or C++.
							</p>
							</div>
							<div class="row">
							<h4>what it does</h4>
							<p>Paint in Java lets you draw squares, ovals, and lines on the canvas, in thirteen 
							different available colors. It also includes an undo button and a clear button.
							</p>
							</div>
							<div class="row">
							<h4>built with</h4>
							This program was built with Java SWING and AWT components.
							</div>
						  </div>
						</modal>
					</div>
				</div>
				<div class="one-half column">
					<div class="row">
						<a href="#">more to be added soon</a>
					</div>
					<!-- <div class="row"> -->
						<!-- <img src="../../static/images/paint.jpg"> -->
						<!-- <modal name="paint" :adaptive="true" :resizable="true" :scrollable="true" height="500px" style="margin-bottom: 10%;"> -->
						  <!-- <div class="container-fluid"> -->
							<!-- <h4>inspiration</h4> -->
							<!-- <div class="row"> -->
							<!-- <p>This program was made for my Software Development class to demonstrate knowledge of Java SWING components. This was -->
							<!-- great practice to learning how to develop GUI applications before moving on to Qt Application Framework with Python or C++. -->
							<!-- </p> -->
							<!-- </div> -->
							<!-- <div class="row"> -->
							<!-- <h4>what it does</h4> -->
							<!-- <p>Paint in Java lets you draw squares, ovals, and lines on the canvas, in thirteen  -->
							<!-- different available colors. It also includes an undo button and a clear button. -->
							<!-- </p> -->
							<!-- </div> -->
							<!-- <div class="row"> -->
							<!-- <h4>built with</h4> -->
							<!-- This program was built with Java SWING and AWT components. -->
							<!-- </div> -->
						  <!-- </div> -->
						<!-- </modal> -->
					<!-- </div> -->
				</div>
			</div>
		</div>
	</div>
 </div>
</template>



<script>

  export default {
    name: 'about',
    props: {
      msg: {
        type: String,
        default: 'About'
      }
    },
    data(){
      return {
		title:"recent work",
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
font-size: 29.5px;
font-family: 'Source Code Pro', monospace;
}

a {
color:#000000;
font-size: 35px;
font-family: 'Source Code Pro', monospace;
}

p {
font-family: 'Source Code Pro', monospace;
}

a span {
color:#000000;
}

img {
width: 60%;
}
</style>
