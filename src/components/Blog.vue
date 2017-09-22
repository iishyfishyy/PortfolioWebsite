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
	<modal name="current" :adaptive="true" :resizable="true" :scrollable="true" height="600px">
	  <div class="container-fluid">
		<h4>Current interests & pursuits</h4>
		<div class="row">
		<p>Recently, I've been quite interested in the following technologies:
		</p>
		<dl>
			<dt>use of NodeJS</dt>
			<dt>ReactJS</dt>
			<dt>VueJS (used to develop this website)</dt>
			<dt>Selenium Web Automation</dt>
			<dt>Machine learning theory</dt>
		</dl>
		<p>
		I've actively spent my spare time that I have from school working and developing websites using VueJS and ReactJS in hopes to get
		familiar with NodeJS hosting. I'm quite enjoying the change it offers from the old PHP backend, and absolutely loving the fast, responsive
		 feeling of a web application.
		</p>
		<p>
		I'm also very interested, currently, in using Java with Selenium to automate web services. I plan to dwell into that once I am finished with VueJS and ReactJS as mentioned
		above. I took some machine learning courses on a student exchange last semester, and am also avidly learning and applying those concepts to get more comfortable with 
		machine learning and AI concepts hands-on.
		</p>
		</div>
	  </div>
	</modal>
	<modal name="triumf" :adaptive="true" :resizable="true" :scrollable="true" height="400px">
	  <div class="container-fluid">
		<h4>Web Application Developer</h4>
		<div class="row">
		<p>I worked at TRIUMF, Canada's National Laboratory for Particle & Nuclear Physics, for the summer of 2016 as a Web Application Developer with the Science Technology group. 
		I was hired to interface a Drupal WebForm with TRIUMF's Redmine Project Management System, 
		so the incoming work requests will be put in a queue, pending approval. After finishing this task, 
		I was required to develop a web-based oscilloscope using NodeJS, ThreeJS, AngularJS, and other similar
		tools. I then had to rework the application using raw WebGL (no ThreeJS wrapper) to benefit from altered 
		rendering methods that boosted performance significantly.
		</p>
		</div>
	  </div>
	</modal>
	<modal name="tutor" :adaptive="true" :resizable="true" :scrollable="true" height="300px">
	  <div class="container-fluid">
		<h4>Univerity of Windsor General Tutor</h4>
		<div class="row">
		<p>I've been working as a general tutor for my university's computer science department since July 2017. I'm responsible to 
		host office hours in the CS common area and help all students with any computer science concepts, assignments, or lab work. Not only
		do I enjoy helping others, but it is also great practice for me as helping other will reiterate important concepts in my mind, ensuring I'm
		always in touch with them.
		</p>
		</div>
	  </div>
	</modal>
	<modal name="ta" :adaptive="true" :resizable="true" :scrollable="true" height="450px">
	  <div class="container-fluid">
		<h4>Teaching Assistant for Computer Concepts for End Users (2016) and Introduction to Java Programming (current)</h4>
		<div class="row">
		<p>I've worked as a teaching assistant at my university for two of the classes listed above.
		I am responsible to conduct office hours for student who need help outside classroom, grade assignments and labs, and maintain 
		an online presence in the course discussion group to assist students. Working as a teaching assistant is very enjoyable for me as
	    I love to explain complex ideas and concepts to others; the feeling of accomplishment I get when someone finally understands something I taught them
		is uncomparable. I love helping fellow computer science students to understand concepts that may be difficult for them 
		as it reinforces the topics to me as well.
		</p>
		</div>
	  </div>
	</modal>
	<modal name="ids" :adaptive="true" :resizable="true" :scrollable="true" height="300px">
	  <div class="container-fluid">
		<h4>Graphic Designer & Web Developer</h4>
		<div class="row">
		<p>I worked with this organization in summer of 2015. I was responsible for developing the product catalogue
		for their LED lighting products, front and back-end development for the product website, and other miscellaneous 
		graphic design and editing work. As this was my first professional job, I learned a lot about meeting deadlines, 
		paying close attention to requirements, and delivering a finished product.
		</p>
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
					{header:'Current interests and pursuits',modalkey:'current'},
					{header:'TRIUMF work experience',modalkey:'triumf'},
					{header:'University tutor experience (current)',modalkey:'tutor'},
					{header:'University teaching assistant experience (current)',modalkey:'ta'},
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

p, dt {
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
