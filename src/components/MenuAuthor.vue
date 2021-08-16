<template>
  <div>
    <h3>作者列表</h3>
    <hr>
    <v-chip-group column>
      <v-menu
        v-for="author in $static.authors.edges"
        :key="`menu-${author.node.title.name}`"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip
            pill
            v-on="on"
          >
            <v-avatar left color="#333333">
              <v-img :src="author.node.title.img"></v-img>
            </v-avatar>
            {{ author.node.title.name }}
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar color="#333333">
                <v-img :src="author.node.title.img"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ author.node.title.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ author.node.title.Twitchid }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item :to="author.node.path">
              <v-list-item-action>
                <v-icon>fas fa-list-ul</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>
                查看文章列表
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item :href="`http://twitch.tv/${author.node.title.Twitchid}`" target="_blank" rel="nofollow noopener noreferrer">
              <v-list-item-action>
                <v-icon>fab fa-twitch</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>
                瀏覽Twitch頻道
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-chip-group>
  </div>
</template>

<static-query>
query {
  authors: allAuthor(sortBy:"date", order:DESC, limit: 10) {
    edges {
      node {
        title {
          name,
          Twitchid,
          img,
        }
        path
      }
    }
  }
}
</static-query>
