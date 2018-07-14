<template>
  <div id="app">
    <Header msg="Curry your Coins <3 Blog" />
    <Content/>
    <Footer msg="Footer" />
  </div>
</template>

<script>
  import Header from './common/Header'
  import Content from './common/Content'
  import Footer from './common/Footer'
  
  export default {
    components: {
      Header,
      Content,
      Footer
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100%;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
  }
  
  
  /* Common Styles */
  
  ul {
    display: inline-flex;
    list-style: none;
  }
  
  .column {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .bottom {
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .form-control:focus,
  .btn:focus {
    box-shadow: 0 0 0rem 0.01rem rgba(0, 123, 255, 0.25) !important;
  }
</style>
