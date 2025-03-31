<template>
  <div class="Info">
    <div>

      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info" v-for="(city, index) in Weathers" :key="index">
          <div class="panel-heading">
            <h3 class="panel-title">{{ city.name }}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p><b>Location:</b> ({{ city.coord.lat }},{{ city.coord.lon }})</p>
                <p><b>Pressure:</b>{{ city.main.pressure }}</p>
                <p><b>Main Weather:</b>{{  city.weather[0].main }}</p>
              </div>
              <div class="col-xs-86col-sm-6 col-md-6 col-lg-6">
                <p><b>Temperature:</b> {{  city.main.temp }}</p>
                <p><b>Humidity:</b> {{  city.main.humidity }}</p>
                <p><b>Description:</b> {{  city.weather[0].description }}</p>
              </div>
            </div>
            <div class="row">
              <img :src="`http://openweathermap.org/img/w/${city.weather[0].icon}.png`" alt="Weather Icon" class="weather-icon" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';


export default {
  name: 'Weather',
  data() {
    return {
      Weathers: {},
      city: this.$route.params.city
    }
  },
  async created() {
    this.Weathers = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${this.city}&type=accurate&appid=bf994a13631033e250e30282b984042b&units=metric`)
    this.Weathers = this.Weathers.data.list
  }
}
</script>

<style scoped>
p {
  text-align: left;
}

.row .weather-icon{
  width: 75px !important;
  display: block;
  margin: 0 auto;
}
</style>