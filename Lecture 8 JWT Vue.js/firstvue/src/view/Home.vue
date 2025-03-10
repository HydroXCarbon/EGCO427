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
  <p v-if="itemInStock > 10">{{ itemInStock }} is in stock</p>
  <p v-else-if="itemInStock > 0">hurry up there are just few item left!</p>
  <p v-else>we are all out</p>
  <p v-show="isShow">you can see this data</p>
  <p v-show="!isShow">hidden</p>

  <ul>
    <li v-for="title in titles" :key="title">{{ title }}</li>
  </ul>

  <ul>
    <li v-for="(value, propertyName, index) in person">
      {{ propertyName }}: {{ value }}
    </li>
  </ul>

  <ul>
    <li v-for="(category) in categories">
      {{ category.name }}
      <ul>
        <li v-for="(sub) in category.sub">
          {{ sub }}
        </li>
      </ul>
    </li>
  </ul>

  <p>{{ counter }}</p>
  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>

  <button v-on:click="counter++">Increase Counter</button>
  <button v-on:click="changeName">Change Name</button>
  <button v-on:click="changeNameSetter">Change Name (Setter)</button>

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
      person: {
        firstName: 'Bob',
        lastName: 'Cat',
        age: 27
      },
      employee: [
        { name: 'Abby', title: 'Accountant' },
        { name: 'Andy', title: 'Marketing Manager' },
        { name: 'Brandon', title: 'Vue.js Expert' }
      ],
      categories: [
        { name: 'Javascript', sub: ['Vue.js', 'React', 'Angular2'] },
        { name: 'Database', sub: ['MySQL', 'PostgreSQL', 'MariaDB'] },
        { name: 'Javascript', sub: ['Operating System', 'Linux', 'Windows'] }
      ]
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.counter++;
    // }, 1000);
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
    },
    changeName: function () {
      this.firstName = 'Tim'
      this.lastName = 'Fox'
    },
    changeNameSetter: function () {
      this.fullName = 'Dean bear'
    }
  },
  computed: {
    fullName: {
      get: function () {
        alert("Assembling full name...")
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        alert("Setting new name" + newValue)
        const parts = newValue.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[parts.length - 1];
      }
    },
    averageScore: function(){
      var sum = this.datas.reduce(function(accumulate, data){
        return accumulate + Number(data.score);
      }, 0);
      return (sum / this.datas.length).toFixed(2);
    }
  }

}
</script>