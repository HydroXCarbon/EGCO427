<template>
  <div>
      <p>Showing {{ filteredTitle.length }} results for {{ query }}</p>
      <ul>
          <li v-for="title in filteredTitle" :key="title">    
              {{ title.Name }}
          </li>
      </ul>
  </div>
</template>

<script>
import { computed} from 'vue'
import titles from '../post-data.json'

export default {
  props:{
      query: String
  },
  setup(props){
      const filteredTitle = computed(() => {
          return titles.filter(title => title.Name.toLowerCase().includes(props.query.toLowerCase()))
      })
      return {
          filteredTitle
      }
  }
}
</script>