<template>
  <div class="my-component">
    <div>{{ message }}</div>
    <div><button @click="sayHello">Click tao đi</button></div>
    <router-link to="/music-drive">Music Drive</router-link>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'MyComponent',
  data () {
    return {
      message: 'Chuyển sang music drive'
    }
  },
  methods: {
    sayHello () {
      router.push({ name: 'MusicDrive' })
    }
  },
  watch: {
    message () {
      console.log('message changed')
    }
  }
}
</script>

<style scoped>
  .my-component {
    color: red;
  }
</style>
