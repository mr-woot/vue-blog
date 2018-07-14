<template>
    <div class="column" id="right">
        <h2 class="top-right">Latest Posts</h2>
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
</style>