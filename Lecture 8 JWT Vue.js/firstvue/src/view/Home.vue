<template>
  <h1> {{ name }}</h1>
  <p>Counter: {{ counter }}</p>
  <p>Full name : {{ getFullName(firstName, lastName).name }}</p>
  <p>Upper First Result: {{ upperFirst(value) }}</p>
</template>

<script>
export default {
  name: 'home',
  props: {

  },
  data() {
    return {
      name: 'Home',
      counter: 0,
      firstName: 'Bob',
      lastName: 'Cat',
      value: 'Hello World',
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    getFullName: function (first, last) {
      return first + ' ' + last;
    },
    upperFirst: function (value) {
      return value
    }
  }
}
</script>