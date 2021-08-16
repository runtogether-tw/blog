<template>
  <div>
    <h3>標籤</h3>
    <hr>
    <v-chip-group column>
      <g-link
        v-for="tag in $static.tags.edges"
        :key="`menu-tag-${tag.node.title}`"
        :to="tag.node.path"
      >
        <v-chip small>
          {{ tag.node.title }}
        </v-chip>
      </g-link>
    </v-chip-group>
  </div>
</template>

<static-query>
query {
  tags: allTag(sortBy:"date", order:DESC, limit: 20) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>
