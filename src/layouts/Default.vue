<template>
  <v-app class="layout">
    <header class="header">
      <div class="header__title">
        <slot name="hamburger"></slot>
        <strong class="header__titleText">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/post-list/">文章列表</g-link>
        <a class="nav__link" href="/gdq/">GDQ時程表</a>
      </nav>
    </header>
    <main class="main">
      <slot/>
    </main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: #4BB660 1px solid;
  padding: 0 15px;
  z-index: 100;
  background-color: rgba($color: #121212, $alpha: 0.8);
  backdrop-filter: blur(4px);
  &__title {
    display: flex;
    align-items: center;
  }
  &__titleText {
    margin-left: 15px;
  }
  font-size: 0.9rem;
  @media (min-width: 600px) {
    font-size: 1rem;
  }
}

.main {
  padding-top: 60px;
  width: 100%;
  min-height: calc(100% - 60px);
}

.nav__link {
  margin-left: 20px;
}
</style>
