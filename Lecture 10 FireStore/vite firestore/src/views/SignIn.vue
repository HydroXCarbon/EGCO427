<template>
  <div class="container">
    <h1>Sign In</h1>
    <br><br>
    <div class="row">
      <div class="col-lg-3" />
      <div class="col-lg-6">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" v-model="formData.password" class="form-control" placeholder="password" />
        <br>
        <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
      </div>
      <div class="col-lg-3" />
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="btn-group">
          <button type="button" class="btn btn-warning" @click="signInGoogle">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      errorMessages: '',
      sucessMessage: '',
      xhrRequest: false
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
          this.$router.push('/movies')
        })
        .catch((error) => {
          this.errorMessages = error.message
          alert(error.message)
          this.sucessMessage = ''
        })
    },
    signInGoogle() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken

          const user = result.user
          this.$router.push('/movies')
        }).catch((error) => {
          this.errorMessages = error.message
          const errorcode = error.code
          const errorCredential = GoogleAuthProvider.credentialFromError(error)
          alert(error.message)

        })
    }
  }
}
</script>