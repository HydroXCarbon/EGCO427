<template>
  <div>
    <p>Title: {{ this.title }}</p>
    <p>Released: {{ this.release }}</p>
  </div>

  <p v-if="release > 2000">The moive is new.</p>
  <p v-else>The moive is old.</p>

  <span v-bind:title="title">Hover your mouse here</span>

  <div>
    <input type="text" v-on:keyup="keyUp($event)">
    Output: {{ name }}

    <br><br>
  </div>
</template>

<script>
export default {
  name: 'ex1',
  data() {
    return {
      title: "Star War",
      release: "2001",
      name: '',
    }
  },
  methods: {
    keyUp: function (event) {
      this.name = event.target.value;
    }
  }
}
</script>