<template>
    <div class="column" id="right">
        <h2 class="top-right">Subscribe</h2>
        <div class="bottom">
            <subscribe-form></subscribe-form>
        </div>
    </div>
</template>

<script>
import SubscribeForm from "../components/subscribe-form";
export default {
  name: "sidebar",
  msg: String,
  components: {
    SubscribeForm
  }
};
</script>

<style scoped>
.top-right {
  flex-shrink: 0;
  display: inline-flex;
}
</style>