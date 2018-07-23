<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <card v-bind:comments="post.comments" v-bind:id="post.id" v-bind:title="post.title" v-bind:subTitle="post.subTitle" v-bind:text="post.text" v-bind:link="post.link"></card>
        </div>
    </div>
</template>

<script>
import Card from "./card";
export default {
  name: "card-list",
  components: {
    Card
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Who would replace Lucas Digne if he leaves Barcelona?",
          subTitle: "Lucas Digne is on the brink of a move to Everton",
          link:
            "https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/956628988-850x560.jpeg&c=sc&w=850&h=560",
          text: "",
          comments: []
        },
        {
          id: 2,
          title: "Xherdan Shaqiri move to Liverpool could trigger deals",
          subTitle:
            "Stoke City remain in talks with Newcastle over the signing of Ritchie",
          link:
            "http://e2.365dm.com/18/07/16-9/20/skysports-andros-townsend-xherdan-shaqiri_4361253.jpg?20180713172423",
          text: "",
          comments: ["That sucks!"]
        },
        {
          id: 3,
          title: "Chelsea sign star midfielder Jorginho from Napoli",
          subTitle:
            "Jorginho has waved farewell to Napoli and is joining Chelsea",
          link:
            "https://s.yimg.com/ny/api/res/1.2/RPFnL0snjVZJVNjNL_2dzg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5e37a49959b3b0e05cc21f95c4e2eafd",
          text: "",
          comments: [
            "Great for Chelsea",
            "Could we expect now, to win Euro ;)",
            "That's great",
            "Looking forward"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>