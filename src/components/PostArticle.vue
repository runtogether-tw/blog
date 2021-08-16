<template>
  <article v-if="post">
    <v-card
      class="mx-auto"
    >
      <g-link :to="post.path">
        <v-img
          v-if="getPostImg(post.content)"
          class="white--text align-end"
          height="250px"
          :src="getPostImg(post.content)"
        >
          <v-card-title class="text-shadow" :class="$vuetify.breakpoint.smAndUp &&'PostArticle__title--lg'">{{ post.title }}</v-card-title>
        </v-img>
        <v-card-title v-else class="text--primary" :class="$vuetify.breakpoint.smAndUp &&'PostArticle__title--lg'">{{ post.title }}</v-card-title>
        <v-card-subtitle class="py-2">{{ post.subtitle }}</v-card-subtitle>
      </g-link>
      <div class="mx-4" :class="{
        'PostArticle__game--vertical': $vuetify.breakpoint.smAndDown,
      }">
        <template v-if="post.game">
          <g-link
            :to="post.game.path"
          >
            {{ gameI18n[post.game.title] }}
          </g-link>
          <span v-if="!$vuetify.breakpoint.smAndDown && post.tags.length">—</span>
        </template>
        <template v-if="post.tags.length">
          <span :class="!$vuetify.breakpoint.smAndDown && 'mx-2'">
            <g-link
              v-for="tag in post.tags"
              class="mr-1 pointer"
              :key="`${post.title}-${tag.title}`"
              :to="tag.path">
              <v-chip
                small
              >
                {{ tag.title }}
              </v-chip>
            </g-link>
          </span>
        </template>
      </div>
      <v-card-text class="PostArticle__author">
        <v-avatar color="#333333">
          <img
            :src="post.author.title.img"
            :alt="post.author.title.name"
          >
        </v-avatar>
        <div class="PostArticle__info">
          <g-link :to="`/author/${post.author.id}`">
            <div class="text--primary">{{ post.author.title.name }}</div>
          </g-link>
          <div>{{ post.date }}．{{ post.timeToRead }} min read</div>
        </div>
      </v-card-text>
    </v-card>
  </article>
</template>
<script>
import { myMixin } from '@/mixins/mixin';
import gameJson from '@/../data/game.json';

export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  mixins: [myMixin],
  data() {
    return {
      gameI18n: gameJson,
    };
  },
  computed: {
  },
  created() {
  },
};
</script>

<style lang="scss">
.PostArticle {
  &__game{
    &--vertical {
      display: flex;
      flex-direction: column;
    }
  }
  &__title {
    &--lg {
      font-size: 34px !important;
      line-height: 1.2 !important;
    }
  }
  &__author {
    display: flex;
  }
  &__info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
