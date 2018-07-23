<template>
    <div class="mb1rem">
        <router-link :loading="true" :to="{ name: 'post', params: { id, title, text, subTitle, link }}" tag="b-card-group">
            <b-card-group class="c-bcard">
                <div class="img-wrapper">
                    <b-img class="c-img" width="200" height="250" blank-color="#bbb" v-bind:src="link" block alt="Fluid image" />
                </div>
                <b-card v-bind:title="title" v-bind:subTitle="subTitle">
                    <p class="card-text">
                        {{text}}
                    </p>
                    <h6>{{comments.length > 1 ? comments.length + " Comments" : comments.length === 0 ? "" : "1 Comment"}}</h6>
                </b-card>
            </b-card-group>
        </router-link>
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
    link: String,
    comments: Array
  }
};
</script>

<style scoped>
.mb1rem {
  margin-bottom: 1rem;
}

.c-bcard {
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin: 0 0 30px;
  min-height: 250px;
  cursor: pointer;
}

.c-img {
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
}
.card-group > .card {
  margin-bottom: 0;
  border: none;
}
</style>