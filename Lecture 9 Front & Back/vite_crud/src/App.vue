<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'App',
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push('/signin');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="users">Users</router-link> |
      <button class="btn btn-success btn-block full-width" @click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>

<style scoped></style>
