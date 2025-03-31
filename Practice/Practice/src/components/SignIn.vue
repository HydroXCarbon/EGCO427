<template>
  <div class="row">
    <h2>Signin</h2>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" />
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

      <input v-model="formData.email" type="email" class="form-control" placeholder="email">
      <br>
      <input v-model="formData.password" type="password" class="form-control" placeholder="password">
      <br>
      <button class="btn btn-success btn-block full-width" @click="signIn">Signin</button>
    </div>

  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
        .then((user) => {
          this.sucessMessage = 'User signed in successfully'
          this.errorMessages = ''
          this.formData.email = ''
          this.formData.password = ''
          this.$router.push('/cities')
        })
        .catch((error) => {
          this.errorMessages = error.message
          alert(error.message)
          this.sucessMessage = ''
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>