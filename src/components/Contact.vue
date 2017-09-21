<template>
 <div>
	<div style="margin-top:3%">
		<div class="container-fluid">
			<div class="row">
				<span class="title">{{title}}</span>
			</div>
			<hr/>
			<div class="row">
				<p>
					I appreciate your time, you can reach me at: 
				</p>
			</div>
			<div class="row">
				<i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
				<span class="text"><a v-bind:href="'mailto:'+email">{{email}}</a></span>
			</div>
			<div class="row">
				<i class="fa fa-mobile fa-4x" aria-hidden="true"></i>
				<span class="text">&nbsp;{{phone}}</span>
			</div>
		</div>
	</div>
 </div>
</template>



<script>

  export default {
    name: 'contact',
    props: {
      msg: {
        type: String,
        default: 'Contact'
      }
    },
    data(){
      return {
		title:"contact me",
		phone:"226 260 2296",
		email:"mishrai@uwindsor.ca",
      }
    },
	components: {
	
	},
    methods: {
	
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


a {
color:#000000;
}

a span {
color:#000000;
}

p {
font-size: 2em;
font-family: 'Source Code Pro', monospace;
}

.text {
margin-left: 5%;
font-size: 2em;
font-family: 'Source Code Pro', monospace;
width: 60%;
}
</style>
