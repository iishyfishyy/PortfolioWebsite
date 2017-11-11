<template>
	<div>
		<div class="container-fluid">
		<div class="row">
			<span class="name">{{nametext}}</span>
		</div>
		<div class="row">
			<span class="undername">{{undernametext}}</span> <br/>
			<a href="../../static/resume.pdf" style="padding-right:30px;"><span class="iconfont">resume</span></a>
			<a href="https://github.com/iishyfishyy" style="padding-right:30px;"><span class="iconfont">github</span></a>
			<a href="https://instagram.com/ishyfishyyy"><span class="iconfont">photography</span></a>
		</div>
		<hr/>
		<div>
			<div style="margin-top:3%">
				<div class="container-fluid">
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
				<p>Recently, I've been interested in the following technologies:
				</p>
				<dl>
					<dt>ReactJS</dt>
					<dt>VueJS (used to develop this website)</dt>
					<dt>Selenium Web Automation</dt>
					<dt>Machine learning with Tensorflow</dt>
					<dt>Unity3D game development</dt>
				</dl>
				<p>
				I've actively spent my spare time that I have from school working and developing websites using VueJS and ReactJS. I'm enjoying the change it offers from the old PHP backend, and absolutely loving the fast, responsive
				 feeling of a web application.
				</p>
				<p>
				I've been experimenting with Selenium web automation to build basic applications that check the weather for me whenever I want, or scrape some data off a webpage with the help of JSoup.
				I plan on building more complex applications with Selenium after I am strong in the basics.
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
		<!-- 
		
		<div class="row">
			<p class="about"><b>I'm a fourth year student at University of Windsor studying Computer Science with Software Engineering.</b>
		I have experience designing software for desktop and mobile, as well as web development for back and front end. Over
		I have, continue learning about the various technologies out there, and self-improve by reading and learning by reading good books.
		the short term, <b>I plan to get an internship over the summer</b> to gain experience relevant to my field, work on the many ideas
		Over the long term, my passion lies in making software, mobile & web applications, and turning my business ideas into creations that
		will fulfill our societies' ever evolving needs. <b>Alfred North Whitehead once said, "civilization advances by extending the number of 
		operations we can perform without thinking about them."</b> Our world is headed towards that reality and I want to be a part of the community
		that achieves that goal. I plan on achieving this through my deep desire for life-time learning because that is the best way to maximise
		my potential and my ability to create extraordinary value. It takes the same effort to have a small dream as it does to have a big dream,
		so I like to dream big.</p>
			<p class="about">
			<b>When I'm not in front of a monitor</b>, you can find me out exploring my passion for photography and filming. In addition to developing software,
			I enjoy capturing the natural beauty of Earth with a lens. <b>Photography and film portfolio coming soon.</b>
			</p>
		</div>
		
		-->
		
	</div>
	
	</div>
		

</template>

<script type="text/javascript">
	var sc_project=10787208; 
	var sc_invisible=1; 
	var sc_security="a8e8b37b"; 
	var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
	document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+"statcounter.com/counter/counter.js'></"+"script>");
	</script>
	<noscript><div class="statcounter"><a title="Web Analytics"
	href="http://statcounter.com/" target="_blank"><img
	class="statcounter"
	src="//c.statcounter.com/10787208/0/a8e8b37b/1/" alt="Web
	Analytics"></a></div></noscript>

<script>

  export default {
    name: 'home',
    props: {
      msg: {
        type: String,
        default: 'Home'
      }
    },
    data(){
      return {
		nametext: "ISHAN MISHRA",
		undernametext: "software engineer \\ web developer \\ photographer \\ creative thinker",
		blogtitles: [
		{header:'Self learning ReactJS, Selenium & others',modalkey:'current'},
		{header:'TRIUMF Web Application Developer',modalkey:'triumf'},
		{header:'University tutoring (current)',modalkey:'tutor'},
		{header:'University teaching assistant (current)',modalkey:'ta'},
		{header:'International Data Systems work experience',modalkey:'ids'},
		],
		i: 0
      }
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

.iconfont{
font-family: 'Source Code Pro', monospace;
font-size: 1m;
}

a {
color:#000000;
font-size: 2em;
font-family: 'Source Code Pro', monospace;
}

a{
color:#000000;
}

.name{
font-family: 'Libre Barcode 128 Text', cursive;
font-size: 10em;
}

p, dt {
font-size: 1em;
font-family: 'Source Code Pro', monospace;
}

.undername{
font-size: 2em;
font-family: 'Source Code Pro', monospace;
}

.about{
width: 100%;
font-family: 'Source Code Pro', monospace;
font-size: 1em;
}

.text {
margin-left: 5%;
font-size: 2em;
font-family: 'Source Code Pro', monospace;
width: 60%;
}

</style>
