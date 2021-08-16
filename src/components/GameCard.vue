<template>
  <v-card class="GameCard pa-3 mx-auto" :class="{
    'GameCard--vertical': $vuetify.breakpoint.smAndDown,
  }"
    color="#252525"
  >
    <template v-if="gameData">
      <div class="GameCard__img">
        <v-img
          aspect-ratio="0.75"
          min-width="200"
          max-width="285"
          :src="boxArt"
        >
        </v-img>
      </div>
      <div class="GameCard__text">
        <div class="GameCard__title">{{ gameData.game.data.names.international }}</div>
        <div class="GameCard__platforms white--text text--darken-1">
          <div v-for="(p, index) in gameData.game.data.platforms.data" :key="p.id">
            <template v-if="index !== 0">, </template>{{p.name}}
          </div>
        </div>
        <div class="GameCard__category white--text text--darken-1">
          <a :href="gameData.weblink" target="_blank" rel="noreferer">
            <span v-if="gameData.level.data.name">
              {{ `${gameData.level.data.name} - ` }}
            </span>
            <span>{{ gameData.category.data.name }}</span>
          </a>
          <span v-for="v in gameData.values" :key="`var-${v}`">
            {{ ` / ${varriableList[v]}` }}
          </span>
        </div>
        <table class="GameCard__table my-2 white--text text--darken-1">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in gameData.runs" :key="r.run.id">
              <td class="text-center">
                <img class="GameCard__trophy" v-if="r.place >=1 && r.place <=3"
                  :src="`https://www.speedrun.com/themes/Default/${rankList[r.place]}.png`">
                {{ rankList[r.place] }}
              </td>
              <td>
                <span class="mr-2" v-for="p in r.run.players" :key="`${r.run.id}-${p.id}`" :style="`color:${userList[p.id].color}`">
                  {{ userList[p.id].name }}
                </span>
              </td>
              <td class="text-center">{{ r.run.times.primary | time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-else>
      <div class="GameCard__img">
        <v-skeleton-loader
          type="image"
          min-width="200"
          max-width="285"
        ></v-skeleton-loader>
      </div>
      <v-skeleton-loader
        class="GameCard__text"
        type="article"
      ></v-skeleton-loader>
    </template>
  </v-card>
</template>

<script>
import axios from 'axios';
import { myMixin } from '@/mixins/mixin';

export default {
  props: {
    gameUrl: {
      type: String,
      default: null,
    },
  },
  mixins: [myMixin],
  data() {
    return {
      gameVar: null,
      gameData: null,
    };
  },
  computed: {
    userList() {
      if (!this.gameData) {
        return {};
      }
      return this.gameData.players.data.reduce((s, a) => {
        s[a.id] = { // eslint-disable-line
          name: a.names.international,
          color: a['name-style']['color-from'].dark,
        };
        return s;
      }, {});
    },
    boxArt() {
      if (!this.gameData) {
        return 'https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg';
      }
      return `https://static-cdn.jtvnw.net/ttv-boxart/${this.gameData.game.data.names.twitch}-285x380.jpg`;
    },
    varriableList() {
      const ret = {};
      this.gameData.variables.data.forEach((v) => {
        Object.keys(v.values.values).forEach((val) => {
          ret[val] = v.values.values[val].label;
        });
      });
      return ret;
    },
  },
  watch: {
    gameUrl() {
      this.getGameData();
    },
  },
  methods: {
    async getGameData() {
      this.gameData = null;
      this.gameVar = this.getGamesVar(this.gameUrl);
      let reqUrl;
      if (this.gameVar.level) {
        reqUrl = `https://www.speedrun.com/api/v1/leaderboards/${this.gameVar.game}/level/${this.gameVar.level}/${this.gameVar.category}?top=3&embed=players,game,category,level,game.platforms,variables`;
      } else {
        reqUrl = `https://www.speedrun.com/api/v1/leaderboards/${this.gameVar.game}/category/${this.gameVar.category}?top=3&embed=players,game,category,level,game.platforms,variables`;
      }
      if (this.gameVar.var) {
        reqUrl = `${reqUrl}${this.gameVar.var}`;
      }
      // console.log(this.gameVar, reqUrl);
      try {
        const results = await axios.get(reqUrl);
        this.gameData = results.data.data;
      } catch (error) {
        this.gameData = null;
      }
    },
  },
  async mounted() {
    this.getGameData();
  },
  created() {
    this.rankList = {
      0: '-',
      1: '1st',
      2: '2nd',
      3: '3rd',
    };
  },
};
</script>

<style lang="scss">
.GameCard {
  display: flex;
  max-width: 650px;
  align-items: center;
  &--vertical {
    flex-direction: column;
    .GameCard__text {
      padding-bottom: 0;
    }
  }
  &__img {
    flex-shrink: 0;
    flex-grow: 0;
  }
  &__title {
    font-size: 20px;
    line-height: 1.5;
  }
  &__text {
    padding: 20px;
    width: 100%;
    flex-grow: 1;
  }
  &__platforms {
    display: flex;
  }
  &__trophy {
    width: 16px;
    height: 16px;
  }
  &__table {
    width: 100%;
    tr td {
      vertical-align: middle;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>
