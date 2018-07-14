<template>
    <div class="mb1rem">
        <b-card-group class="c-bcard">
            <div class="img-wrapper">
                <b-img class="c-img" width="200" height="250" blank-color="#bbb" v-bind:src="link" block alt="Fluid image" />
            </div>
            <b-card v-bind:title="title" v-bind:subTitle="subTitle">
                <p class="card-text">
                    {{text}}
                </p>
                <router-link :loading="true" :to="{ name: 'post', params: { id, title, text, subTitle, link }}" class="card-link">Link</router-link>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
  name: "post-card",
  props: {
    id: Number,
    title: String,
    text: String,
    subTitle: String,
    link: String
  }
};
</script>

<style scoped>
.mb1rem {
  margin-bottom: 1rem;
}

.c-bcard {
  min-height: 250px;
  border-radius: 4px;
  /* border: 1px solid rgba(34, 34, 34, 0.4); */
  box-shadow: 0 2px 6px 0 rgba(34, 34, 34, 0.08), 0 0 0 0px rgba(0, 0, 0, 0.08);
}
.c-img {
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
}
</style>