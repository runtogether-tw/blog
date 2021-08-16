<template>
  <Layout>
    <section class="SpeedrunCom container">
      <h1>Speedrun.com 文章參數產生器</h1>
      <v-card class="mt-5" dark>
        <v-card-title>1. 輸入遊戲名稱縮寫</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="game"
            label="遊戲縮寫"
            outlined
          ></v-text-field>
          <v-btn @click.stop="searchGame">查詢</v-btn>
        </v-card-text>
      </v-card>
      <v-card v-if="gameData" class="mt-5" dark>
        <v-card-title>2. 選擇Speedrun關卡/項目</v-card-title>
        <v-card-text>
          <v-checkbox class="mb-3" v-model="isLevel" label="為個別關卡"></v-checkbox>
          <v-select
            v-if="isLevel"
            label="Speedrun關卡"
            :items="GameLevels"
            v-model="level"
            outlined
          ></v-select>
          <v-select
            label="Speedrun項目"
            :items="GameCategories"
            v-model="category"
            outlined
          ></v-select>
          <v-divider v-if="GameCategoriesVariables.length" class="mx-4"></v-divider>
          <template v-for="v in GameCategoriesVariables">
            <v-select
              :key="v.id"
              :label="v.name"
              :items="objectToItems(v.values.values)"
              v-model="categoryVariable[v.id]"
              clearable
              outlined
            ></v-select>
          </template>
          <v-btn :disabled="!category" @click.stop="genCode">產生</v-btn>
        </v-card-text>
      </v-card>
      <v-card v-if="code" class="mt-5" dark>
        <v-card-title>3. 複製並貼至文章內</v-card-title>
        <v-card-text>
          <v-text-field :value="code" readonly outlined></v-text-field>
          <div class="my-2">
            <game-card :gameUrl="code"></game-card>
          </div>
        </v-card-text>
      </v-card>
    </section>
  </Layout>
</template>

<script>
import axios from 'axios';
import gameCard from '@/components/GameCard.vue';

export default {
  metaInfo: {
    title: '文章參數產生器',
  },
  components: {
    gameCard,
  },
  data() {
    return {
      game: null,
      isLevel: false,
      gameData: null,
      level: null,
      category: null,
      categoryVariable: {},
      code: null,
    };
  },
  computed: {
    GameCategories() {
      if (this.gameData && !this.isLevel) {
        return this.gameData.categories.data
          .filter((e) => e.type === 'per-game')
          .map((e) => ({
            text: e.name,
            value: e,
          }));
      }
      if (this.isLevel && this.level) {
        return this.level.categories.data
          .filter((e) => e.type === 'per-level')
          .map((e) => ({
            text: e.name,
            value: e,
          }));
      }
      return [];
    },
    GameCategoriesVariables() {
      if (this.category) {
        return this.category.variables.data;
      }
      return [];
    },
    GameLevels() {
      if (this.gameData) {
        return this.gameData.levels.data
          .map((e) => ({
            text: e.name,
            value: e,
          }));
      }
      return [];
    },
  },
  watch: {
    game() {
      if (this.gameData) {
        this.resetVal();
        this.gameData = null;
      }
    },
    isLevel() {
      this.resetVal();
    },
  },
  methods: {
    async searchGame() {
      this.resetVal();
      this.gameData = null;
      if (!this.game) {
        return;
      }
      const reqUrl = `https://www.speedrun.com/api/v1/games/${this.game}?embed=categories.variables,levels.categories.variables`;
      try {
        const results = await axios.get(reqUrl);
        this.gameData = results.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    resetVal() {
      this.code = null;
      this.level = null;
      this.category = null;
      this.categoryVariable = {};
    },
    objectToItems(obj) {
      return Object.keys(obj).map((key) => ({
        text: obj[key].label,
        value: key,
      }));
    },
    async genCode() {
      this.code = this.game;
      if (this.level) {
        this.code = `${this.code}/${this.level.id}`;
      }
      if (this.category) {
        this.code = `${this.code}#${this.category.id}`;
      }
      Object.keys(this.categoryVariable).forEach((e, index) => {
        if (!this.categoryVariable[e]) {
          return;
        }
        if (index === 0) {
          this.code = `${this.code}?`;
        }
        this.code = `${this.code}&var-${e}=${this.categoryVariable[e]}`;
      });
    },
  },
};
</script>

<style lang="scss">
</style>
