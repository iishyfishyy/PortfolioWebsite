<template>
 <div>
	<div style="margin-top:3%">
		<div class="container-fluid">
			<div class="row">
				<span class="title">{{title}}</span>
			</div>
			<hr/>
			
			
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
