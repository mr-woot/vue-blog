<template>
    <header class="header">
        <h1 v-once>{{msg}}</h1>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  box-shadow: 0px 1px 10px #a0a0a0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
h1 {
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 0;
}
@media only screen and (max-width: 991px) {
  h1 {
    font-size: 1.4rem;
    padding: 1rem 0;
  }
}
</style>
