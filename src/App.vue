<template>
  <div id="app">
    <div class="container">
      <ppHeader></ppHeader>
    </div>
    <div class="container">
      <ppMenu></ppMenu>
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
  import Menu from './components/Menu.vue'

  export default {
    components: {
      ppHeader: Header,
      ppFooter: Footer,
      ppHome: Home,
      ppMenu: Menu
    }
  }
</script>

<style>

</style>
