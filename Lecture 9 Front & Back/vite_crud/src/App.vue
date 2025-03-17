<script>
export default {
  name: 'App',
  methods: {
    logout() {
      console.log('logout');
    }
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="users">Users</router-link>
      <button class="btn btn-success btn-block full-width" @click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>

<style scoped></style>
