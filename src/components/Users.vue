<template>

  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="adduser">
      <input type="text" v-model="newuser.name" placeholder="Enter Name"><br/>
      <input type="text" v-model="newuser.email" placeholder="Enter Email"><br/>
      <input type="submit" value="Submit"><br/>
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
        {{user.name}}: {{user.email}}
        </span>
      </li>
    </ul>
  </div>

</template>

<script>

  export default {
    name: 'users',
    data(){
      return {
        newuser: {

        },
        users: [
          {
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            contacted: false
          },
          {
            name: 'Mary Jane',
            email: 'mjane@gmail.com',
            contacted: false
          },
          {
            name: 'Bob Dylan',
            email: 'bdill@gmayail.com',
            contacted: false
          },
        ]
      }
    },
    methods: {
      adduser: function(e){
        this.newuser.contacted = false;
        this.users.push(this.newuser);
        e.preventDefault();
      }
    },
  }

</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }

</style>
