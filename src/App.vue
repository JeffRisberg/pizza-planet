<template>
  <div id="app">
    <div class="container">
      <ppHeader></ppHeader>
    </div>
    <div class="container">
      <ppHome></ppHome>
    </div>
    <div class="container">
      <ppFooter></ppFooter>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue'

  export default {
    components: {
      ppHeader: Header,
      ppFooter: Footer,
      ppHome: Home
    }
  }
</script>

<style>

</style>
