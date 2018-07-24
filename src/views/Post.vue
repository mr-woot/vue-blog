<template>
  <div :class="{'detailed-post': loader}">
    <div v-show="!loader" class="post">
      <h2>{{posts[$route.params.id - 1].title}}</h2>
      <div class="img-wrapper">
        <b-img class="c-img" blank-color="#bbb" v-bind:src="posts[$route.params.id - 1].link" fluid alt="Image" />
      </div>
      <h5>{{posts[$route.params.id - 1].subTitle}}</h5>
      <div class="ppost">
        <p v-for="(p, index) in posts[$route.params.id - 1].text" :key="index" v-bind:style="{marginTop: '1rem', marginBottom: '1.5rem'}">{{p}}</p>
      </div>
      <b-button class="c-button" :disabled="disabledComments" :pressed="clicked" v-if="posts[$route.params.id - 1].comments.length > 0" size="" variant="success" v-on:click="loadComments">
        <icon v-show="clicked" name="spinner" spin /> {{ buttonText }}
      </b-button>
      <div v-else>
        No Comments
      </div>
      <div class="comments-wrapper" v-show="showComments">
        <h4>Comments</h4>
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <icon name="user-circle" />
          <div>{{comment}}</div>
        </div>
      </div>
    </div>
    <ball-pulse-loader v-show="loader" color="#6AF788" class="loader"></ball-pulse-loader>
  </div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Who would replace Lucas Digne if he leaves Barcelona?",
          subTitle: "Lucas Digne is on the brink of a move to Everton",
          link:
            "https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/956628988-850x560.jpeg&c=sc&w=850&h=560",
          text: [
            "If he leaves, the management has two options to replace him. Firstly, the club can always call up Marc Cucurella to the first-team squad. The 19-year old left-back for impressive for Barcelona B last season, and deserves a berth in the senior squad.",
            "But there is another option, of signing a replacement. There are young left-backs like Jonny Castro, Ferland Mendy and Alejandro Grimaldo in the transfer market, and they are all capable of replacing Lucas Digne.",
            "But the promotion of Marc Cucurella is still the best option. The youngster deserves an opportunity at being a success at the highest level of football. He possesses great speed and agility, and could be the successor to Jordi Alba.",
            "But Alejandro Grimaldo also graduated from La Masia, and he has a lot of potential. If the management chooses to bring back Grimaldo, he would bring a lot to the squad. But if Lucas Digne does leave, the club would be better off, regardless of his replacement."
          ],
          comments: []
        },
        {
          id: 2,
          title:
            "Xherdan Shaqiri move to Liverpool could trigger Andros Townsend, Matt Ritchie, Michail Antonio deals",
          subTitle:
            "Stoke City remain in talks with Newcastle over the signing of Ritchie",
          link:
            "http://e2.365dm.com/18/07/16-9/20/skysports-andros-townsend-xherdan-shaqiri_4361253.jpg?20180713172423",
          text: [
            "Once Xherdan Shaqiri's deal to Liverpool is finalised, Sky Sports News understands it could trigger moves for Matt Ritchie, Andros Townsend and Michail Antonio.",
            "Stoke City remain in talks with Newcastle over the signing of Ritchie, according to Sky sources, with the Magpies understood to want around £15m. Stoke are willing to pay £11.5m.",
            "The £13.5m they receive from Liverpool for Shaqiri could see them up their bid closer to Newcastle's valuation.",
            "We are told Ritchie, who scored three goals in 35 Premier League appearances last season, is open to the move.",
            "If the Scotland international goes to Stoke, Newcastle will use the money to fund a move for Townsend.",
            "Crystal Palace are thought to want around £17m for the winger, who left Newcastle to go to Selhurst Park in 2016.",
            "Townsend returning to St James' Park could see Crystal Palace use the funds to try and sign West Ham's Antonio.",
            "Sky Sports News reported earlier this week West Ham would consider offers upwards of £15m for Antonio as they look to recoup funds with their summer spending set to exceed £90m."
          ],
          comments: ["That sucks!"]
        },
        {
          id: 3,
          title: "Chelsea sign star midfielder Jorginho from Napoli",
          subTitle:
            "Jorginho has waved farewell to Napoli and is joining Chelsea",
          link:
            "https://s.yimg.com/ny/api/res/1.2/RPFnL0snjVZJVNjNL_2dzg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5e37a49959b3b0e05cc21f95c4e2eafd",
          text: [
            "Chelsea’s new manager Maurizio Sarri has wasted no time in making his mark on the club, with Italy international Jorginho joining from Napoli.",
            "The Italy international has signed a five-year contract, with the Londoners seeing off competition from big-spending Manchester City to land the player.",
            "Jorginho said: “I am absolutely ecstatic to be here at Chelsea. It is not easy to become part of such a big team so I am very, very happy.",
            "“I am excited to play in such an intense league, for a team that gives everything to play and win.”",
            "The news is likely to anger Premier League champions Manchester City, who believe they were close to signing the player."
          ],
          comments: [
            "Great for Chelsea",
            "Could we expect now, to win Euro ;)",
            "That's great",
            "Looking forward"
          ]
        }
      ],
      loader: true,
      clicked: false,
      comments: [],
      showComments: false,
      commentIndex: 0,
      buttonText: "Load Comments",
      disabledComments: false
    };
  },
  methods: {
    loadComments() {
      const self = this;
      this.clicked = true;
      setTimeout(function() {
        self.clicked = false;
        self.showComments = true;
        self.comments = [
          ...self.comments,
          ...self.posts[self.$route.params.id - 1].comments.slice(
            self.commentIndex,
            self.commentIndex + 3
          )
        ];
        self.buttonText =
          self.comments.length ===
          self.posts[self.$route.params.id - 1].comments.length
            ? "No More Comments"
            : "Load More Comments";
        self.disabledComments = self.buttonText === "No More Comments";
        self.commentIndex += 3;
      }, 1500);
    }
  },
  mounted() {
    const self = this;
    setTimeout(function() {
      const isComments =
        self.posts[self.$route.params.id - 1].comments.length > 0;
      self.loader = false;
      self.buttonText = !isComments ? "No Comments" : "Load Comments";
    }, 1500);
  }
};
</script>

<style scoped>
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
}

.ppost {
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.post {
  display: flex;
  flex-flow: column nowrap;
}

.ppost > p:not(:first) {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.post h2 {
  margin-bottom: 2.5rem;
  font-size: 2rem;
}

.post h5 {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: #a1a1a1;
  font-size: 1.5rem;
}

.comments-wrapper {
  /* margin-top: 1rem; */
  /* background: #9d9d9d; */
  background: #fff;
  padding: 2rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
}

.comments-wrapper > div {
  background: #eee;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #1d1d1d;
}

.c-button {
  margin: 1.5rem 0;
}

.comment-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.comment-item:first-child {
  margin-top: 1rem;
}

.comment-item > svg {
  margin-right: 1rem;
}

@media only screen and (min-width: 992px) {
  .detailed-post {
    height: calc(100vh - 112px - 56px - 4rem);
  }
}
</style>