<template>
  <main-content>
    <template v-slot:content>
      <div class="article">
        <h1>{{ $page.post.title }}</h1>
      </div>
      <post-author :post="$page.post"></post-author>
      <game-card v-if="$page.post.rule" class="my-5" :gameUrl="$page.post.rule"></game-card>
      <div class="article">
        <div class="content" v-html="$page.post.content" />
      </div>
    </template>
    <template v-slot:sidebar>
      <div class="Sidebar__menuBlock Sidebar__sticky">
        <h3>
          目錄
        </h3>
        <template v-for="anchor in $page.post.headings">
          <div :class="`Sidebar__anchor--${anchor.depth}`" :key="`anchor-${anchor.anchor}`">
            <a :href="anchor.anchor">
              {{ anchor.value }}
            </a>
          </div>
        </template>
      </div>
    </template>
  </main-content>
</template>

<script>
import MainContent from '@/layouts/MainContent.vue';
import GameCard from '@/components/GameCard.vue';
import PostAuthor from '@/components/PostAuthor.vue';

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  components: {
    MainContent,
    GameCard,
    PostAuthor,
  },
  data() {
    return {
      hash: null,
    };
  },
  mounted() {
    if (this.hash) {
      window.scrollTo({ top: document.querySelector(decodeURI(this.hash)).offsetTop - 70, behavior: 'smooth' });
    }
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hash = to.hash; // eslint-disable-line
    });
  },
};
</script>

<page-query>
  query ($path: String!) {
    post (path: $path) {
      title,
      date (format: "D MMMM, YYYY"),
      timeToRead,
      author {
        id,
        title {
          img,
          name,
          twitch,
          facebook,
          twitter,
          youtube,
        }
      },
      rule,
      content,
      game {
        title,
      },
      tags {
        title,
      },
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<style lang="scss">

$main-color: #4bb660;

// Base Font for HTML
$base-font-size: 16px;

// Paragraph Styles
$paragraph-color: #dddddd;
$paragraph-size: 17px;
$paragraph-line-height: 1.5em;
$paragraph-margin: 20px;

// Header Styles
$header-color: white;
$header-size: 40px;
$header-line-height: 1.25em;
$header-margin: $paragraph-margin * 1.2;

// Blockquote Styles
$blockquote-color: #dddddd;
$blockquote-size: 23px;
$blockquote-line-height: 1.5em;
$blockquote-margin: $paragraph-margin * 1.5;

// hr
$hr-margin: 30px;

// Type Misc
$font-weight-bold: 800;
$border-color: #dadada;
.v-application .article {
  margin-top: 20px;
  // Headers
  h1,h2,
  h3,h4,
  h5,h6 {
    margin-top: $header-margin * 1.5;
    color: $header-color;
    line-height: $header-line-height;
    font-weight: 700;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: $header-size;
    margin-bottom: $header-margin;
  }

  h2 {
    font-size: $header-size / 1.3;
    margin-bottom: $header-margin / 1.3;
    a {
      float: left;
      top: .12em;
      margin-left: -1.2em;
      font-size: .85em;
      text-align: center;
      width: .8em;
      opacity: 0;
      color: #4bb660;
      box-shadow: none;
      background: none;
      transition: opacity 0.2s;
    }
    &:hover {
      a {
        opacity: 1;
      }
    }
  }

  h3 {
    font-size: $header-size / 1.5;
    margin-bottom: $header-margin / 1.5;
    a {
      float: left;
      top: .12em;
      margin-left: -1.2em;
      font-size: .85em;
      text-align: center;
      width: .8em;
      opacity: 0;
      color: #4bb660;
      box-shadow: none;
      background: none;
      transition: opacity 0.2s;
    }
    &:hover {
      a {
        opacity: 1;
      }
    }
  }

  h4 {
    font-size: $header-size / 1.7;
    margin-bottom: $header-margin / 1.7;
  }

  h5 {
    font-size: $header-size / 1.8;
    margin-bottom: $header-margin / 1.8;
  }

  h6 {
    font-size: $header-size / 2;
    margin-bottom: $header-margin / 2;
  }

  a {
    color: lighten(#4bb660, 15%);
  }

  // Paragraphs
  p {
    margin-bottom: $paragraph-margin;
    font-size: $paragraph-size;
    line-height: $paragraph-line-height;
    color: $paragraph-color;
  }
  // Lists
  ul,
  ol {
    margin: 0 0 $paragraph-margin 20px;
    li {
      margin-top: 10px;
      line-height: $paragraph-line-height;
      color: $paragraph-color;
    }
    ul,
    ol {
      margin-top: 0;
    }
  }

  ul {
    li {
      list-style: disc;
    }
    ul {
      li {
        list-style: circle;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
    }
  }

  // hr
  hr {
    height: 1px;
    margin: $hr-margin 0;
    border: none;
    background-color: $border-color;
  }

  // Blockquote
  blockquote {
    margin: $blockquote-margin -12px $blockquote-margin -12px;
    padding: 0 30px 0 26px;
    border-left: 4px solid $main-color;
    font-size: $blockquote-size;
    line-height: $blockquote-line-height;
    color: $blockquote-color;
    text-align: center;
    font-style: italic;
  }

  // Tables
  table {
    width: 100%;
    margin: $blockquote-margin 0;
    border-collapse: collapse;
  }

  table,
  td,
  th {
    border: 1px solid $border-color;
    text-align: left;
  }

  th {
    font-weight: $font-weight-bold;
  }

  th,
  td {
    padding: 15px;
  }

  // Figure
  figure {
    margin: $blockquote-margin -12px;
    text-align: center;
    @media (min-width: 960px) {
      margin: $blockquote-margin -38px;
    }
    img {
      margin: 0 auto;
    }
    .videoPlayer {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      .placeholder {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='150' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z'%3E%3C/path%3E%3C/svg%3E");
          filter: invert(1);
          background-position: center;
          z-index: 2;
          pointer-events: none;
          transition: opacity 0.2s;
          opacity: 0.8;
        }
        &:hover {
          &::after {
            opacity: 1;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
      }
    }
  }

  figcaption {
    margin-top: 10px;
    text-align: center;
    color: darken($paragraph-color, 15%);
    font-size: 16px;
    line-height: 20px;
  }

  // Code
  pre {
    display: block;
    margin: 0 0 40px 0;
    padding: 20px;
    background-color: #1E1E1E;
    color:#dadada;
    border: none;
    overflow: auto;
    border-radius: 3px;

    code {
      position: static;
      padding: 0;
      margin: 0;
      border: none;
      line-height: 1.5em;
      background-color: #1E1E1E;
      color: $blockquote-color;
      &::before, &::after {
        content: none;
      }
    }
  }

  code {
    position: relative;
    top: -0.2em;
    padding: 3px;
    margin: 0 5px;
    font-size: $paragraph-size / 1.2;
    color: darken($border-color, 70%);
    line-height: 1em;
    pointer-events: none;
    border: 1px solid $border-color;
    border-radius: 3px;
    background-color: #1E1E1E;
    color: $blockquote-color;
    box-shadow: none;
  }

  // Misc Styles
  em,
  i,
  .italic {
    font-style: italic;
  }

  strong,
  b,
  .bold {
    font-weight: $font-weight-bold;
  }

  img {
    display: block;
    max-width: 100%;
    margin: $blockquote-margin 0;
  }
}
</style>
