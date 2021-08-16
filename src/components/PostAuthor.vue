<template>
  <div v-if="post" class="PostAuthor">
    <div class="PostAuthor__user">
      <v-avatar color="#333333">
        <img
          :src="post.author.title.img"
          :alt="post.author.title.name"
        >
      </v-avatar>
      <div class="PostAuthor__info">
        <g-link :to="`/author/${post.author.id}`">
          <div class="text--primary">{{ post.author.title.name }}</div>
        </g-link>
        <div>{{ post.date }}．{{ post.timeToRead }} min read</div>
      </div>
    </div>
    <div class="PostAuthor__icon">
      <g-link v-if="post.author.title.twitch" :to="`https://www.twitch.tv/${post.author.title.twitch}`">
        <v-icon>fab fa-twitch</v-icon>
      </g-link>
      <g-link v-if="post.author.title.facebook" :to="`https://www.facebook.com/${post.author.title.facebook}`">
        <v-icon>fab fa-facebook</v-icon>
      </g-link>
      <g-link v-if="post.author.title.twitter" :to="`https://www.twitter.com/${post.author.title.twitter}`">
        <v-icon>fab fa-twitter</v-icon>
      </g-link>
      <g-link v-if="post.author.title.youtube" :to="`https://www.youtube.com/channel/${post.author.title.youtube}`">
        <v-icon>fab fa-youtube</v-icon>
      </g-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  components: {
  },
};
</script>

<style lang="scss">
.PostAuthor {
  color: #dddddd;
  display: flex;
  flex-direction: column-reverse;
  &__user {
    display: flex;
  }
  &__icon {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    a {
      margin: 5px;
    }
  }
  &__info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    &__icon {
      margin-left: 10px;
      margin-bottom: 0;
      justify-content: flex-end;
    }
  }
}
</style>
