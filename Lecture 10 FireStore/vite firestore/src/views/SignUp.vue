<template>
  <div class="container">
    <h1>Signup</h1>
    <br><br>
    <div class="row">
      <div class="col-lg-3" />
      <div class="col-lg-6">
        <input type="email" v-model="formData.email" class="form-control" placeholder="email" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" v-model="formData.password" class="form-control" placeholder="password" />
        <br>
        <button class="btn btn-success btn-block full-width" @click="signUp">Sign Up</button>
      </div>
      <div class="col-lg-3" />
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'SignUp',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      errorMessages: '',
      successMessage: '',
      XPathResult: false
    }
  },
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password)
        .then((user) => {
          this.successMessage = 'User created successfully';
          this.errorMessages = '';
          this.formData.email = '';
          this.formData.password = '';
        })
        .catch((error) => {
          this.errorMessages = error.message;
          alert(error.message);
          this.successMessage = '';
        });
    }
  }
}
</script>