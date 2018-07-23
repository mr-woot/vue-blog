<template>
    <div class="column" id="left">
        <h2 class="top-left">Latest Posts</h2>
        <div class="bottom">
            <card-list></card-list>
        </div>
    </div>
</template>

<script>
import CardList from "../components/card-list.vue";
export default {
  name: "blog-content",
  components: {
    CardList
  }
};
</script>

<style scoped>
#left {
  /* overflow: auto;
  height: auto; */
}
.top-left {
  margin-bottom: 1.5rem;
  font-weight: 300;
}
</style>