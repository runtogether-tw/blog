<template>
  <main-content>
    <template v-slot:content>
      <h1
        v-if="$page.game"
        class="mb-4"
      >
        遊戲: {{ gameI18n[$page.game.title] }}
      </h1>
      <post-article
        class="my-3"
        v-for="(article, index) in $page.game.belongsTo.edges"
        :key="`article-${index}`"
        :post="article.node">
      </post-article>
      <Pager
        class="PostList__pagination"
        :info="$page.game.belongsTo.pageInfo"
      />
    </template>
    <template v-slot:sidebar>
      <div
        :class="{
          'Sidebar__sticky': !$vuetify.breakpoint.smAndDown,
        }"
      >
        <h3>Run Together TW</h3>
        <div>
          <g-link to="http://github.com/runtogether-tw/">
            <v-icon>fab fa-github-square</v-icon>
          </g-link>
        </div>
        <div class="Sidebar__menuBlock">
          <h3>
            過往活動
          </h3>
          <hr>
          <g-link to="https://sites.google.com/site/tgm3rt2018/">
            Run Together 2018
          </g-link>
        </div>
        <menu-author class="Sidebar__menuBlock"></menu-author>
        <menu-tag class="Sidebar__menuBlock"></menu-tag>
      </div>
    </template>
  </main-content>
</template>

<page-query>
query ($id: ID!, $page: Int) {
  game(id: $id) {
    title
    belongsTo(page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            title,
            subtitle,
            author {
              id,
              title {
                name,
                img,
              }
            },
            content,
            path,
            date(format:"YYYY MMM DD"),
            game {
              title,
              path,
            },
            tags {
              title,
              path,
            },
            timeToRead,
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';
import { myMixin } from '@/mixins/mixin';
import MainContent from '@/layouts/MainContent.vue';
import MenuAuthor from '@/components/MenuAuthor.vue';
import MenuTag from '@/components/MenuTag.vue';
import PostArticle from '@/components/PostArticle.vue';
import gameJson from '@/../data/game.json';

export default {
  metaInfo() {
    return {
      title: '',
    };
  },
  components: {
    MainContent,
    Pager,
    MenuAuthor,
    MenuTag,
    PostArticle,
  },
  mixins: [myMixin],
  data() {
    return {
      gameI18n: gameJson,
    };
  },
};
</script>

<style>
</style>
