<template>
  <h1>Search</h1>
  <div>
    <input type="text" placeholder="Filter Search" v-model="query">
    <br><br>
  </div>
  <button @click="reset">Reset</button>
  <br><br>
  <search-result :query="query"/>
</template>

<script>
import { ref } from 'vue'
import SearchResult from '../components/SearchResult.vue'

export default {
  setup() {
    const query = ref('')
    const reset = () => {
      query.value = ''
    }

    return {
      query,
      reset
    }
  },
  components: {
    SearchResult
  }
}
</script>