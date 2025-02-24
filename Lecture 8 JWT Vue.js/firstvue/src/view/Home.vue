<template>
  <h1> {{ name }}</h1>
  <p>Counter: {{ counter }}</p>
  <p>Full name : {{ getFullName(firstName, lastName).name }}</p>
  <p>Upper First Result: {{ upperFirst(value) }}</p>
  <a v-bind:href="url">Visit New page</a>
  <span v-bind:title="url">Test message</span>
  <button v-on:click="clickHandler('hello', $event)">Click here</button>
  <input v-model="value" type="text" v-on:keyup.enter="clickHandler('hello', $event)">
  <p>{{ value }}</p>

  <div v-html="html"></div>
  <p v-if="itemInStock > 10 ">{{ itemInStock }} is in stock</p>
  <p v-else-if="itemInStock > 0">hurry up there are just few item left!</p>
  <p v-else>we are all out</p>

  <p v-show="isShow">you can see this dadta</p>
  <p v-show="!isShow">hidden</p>

  <ul>
    <li v-for="title in titles" :key="title">{{ title }}</li>
  </ul>

</template>

<script>
export default {
  name: 'home',
  props: {

  },
  data() {
    return {
      titles: ['Vue Js', 'React Js', 'Angular Js'],
      isShow: false,
      itemInStock: 0,
      name: 'Home',
      counter: 0,
      firstName: 'Bob',
      lastName: 'Cat',
      value: 'HELLO WORLD TEST',
      url: 'www.vuejs.org',
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    getFullName: function (first, last) {
      return {
        name: first + ' ' + last
      };
    },
    upperFirst: function (value) {
      const temp = value.split(' ');
      return temp.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      }).join(' ');
    },
    clickHandler: function (text, event) {
      alert(text);
      console.log(event);
    }
  },
}
</script>