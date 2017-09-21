<template>
	<div style="margin-top:3%">
		<div class="container-fluid">
		<div class="row">
			<span class="name">{{nametext}}</span>
		</div>
		<div class="row">
			<span class="undername">{{undernametext}}</span>
		</div>
		<hr/>
		<div class="row">
			<p class="about"><b>I'm a fourth year student at University of Windsor studying Computer Science with Software Engineering.</b>
		I have experience designing software for desktop and mobile, as well as web development for back and front end. Over
		the short term, <b>I plan to get an internship over the summer</b> to gain experience relevant to my field, work on the many ideas
		I have, continue learning about the various technologies out there, and self-improve by reading and learning by reading good books.
		Over the long term, my passion lies in making software, mobile & web applications, and turning my business ideas into creations that
		will fulfill our societies' ever evolving needs. <b>Alfred North Whitehead once said, "civilization advances by extending the number of 
		operations we can perform without thinking about them."</b> Our world is headed towards that reality and I want to be a part of the community
		that achieves that goal. I plan on achieving this through my deep desire for life-time learning because that is the best way to maximise
		my potential and my ability to create extraordinary value. It takes teh same effort to have a small dream as it does to have a big dream,
		so I like to dream big.</p>
			<p class="about">
			<b>When I'm not in front of a monitor</b>, you can find me out exploring my passion for photography and filming. In addition to developing software,
			I enjoy capturing the natural beauty of Earth with a lens. Photography and film portfolio coming soon.
			</p>
		</div>
	</div>
	</div>
</div>
		

</template>



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
		undernametext: "software engineer & web developer",
      }
    },
    methods: {

    },
    computed: {

    }
  }

</script>

<style scoped>

.name{
font-family: 'Libre Barcode 128 Text', cursive;
font-size: 150px;
}

.undername{
font-size: 29.5px;
font-family: 'Source Code Pro', monospace;
}

.about{
width: 65%;
font-family: 'Source Code Pro', monospace;
font-size: 20px;
}
</style>
