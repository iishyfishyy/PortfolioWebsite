<template>

  <div class="test">
    <input type="text" v-model="title"><br/>
    <h1>{{title}}</h1>
    <p>Hello, {{user.lname}}, {{user.fname}}</p>
    <br/>
    <ul>
      <li v-for="thing in mylist">{{thing.item}}</li>
    </ul>
    <br/>
    <button v-on:click="saySomething('This is running saySomething() function!')">Say Something</button>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"><br/>

    <hr/>

    <label>First Name: </label><input type="text" v-model="user.fname"> <br/>
    <label>Last Name: </label><input type="text" v-model="user.lname">
    <h4>{{fullname}}</h4>
    <br/>
    <h2>{{msg}}</h2>
  </div>

</template>

<script>

  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Default text'
      }
    },
    data(){
      return {
        title: 'Hello, World',
        user: {
          fname: 'john',
          lname: 'doe'
        },
        mylist: [
            {item: 'item one'},
            {item: 'item two'},
            {item: 'item three'}
        ]
      }
    },
    methods: {
      saySomething: function(message){
        alert(message);
      },
      pressKey: function(e){ //OUTPUTS THE KEY PRESSED or everything typed in the box
        console.log(e.target.value);
      },
      enterHit: function(){
        console.log('you hit enter');
      }
    },
    computed: {
      fullname: function(){
        return this.user.fname + ' ' + this.user.lname;
      }
    }
  }

</script>

<style scoped>


</style>
