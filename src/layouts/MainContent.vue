<template>
  <Layout>
    <template v-slot:hamburger>
      <label
        v-show="breakpoint"
        class="burger"
        :class="{
          'burger--open': showSideBar,
        }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <input
          class="burger__checkbox"
          type="checkbox"
          v-model="showSideBar"
        >
      </label>
    </template>
    <div
      class="container MainContent"
      :class="{
        'MainContent--mobile': breakpoint,
      }"
    >
      <div class="MainContent__content">
        <slot name="content" />
      </div>
      <div
        class="MainContent__sidebar"
        :class="{
          'MainContent__sidebar--show': showSideBar,
        }"
      >
        <slot name="sidebar" />
      </div>
    </div>
  </Layout>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      showSideBar: false,
    };
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    routeHash() {
      return this.$route.hash;
    },
  },
  watch: {
    routeHash() {
      this.showSideBar = false;
    },
  },
};
</script>
<style lang="scss">
.MainContent {
  display: flex;
  &__content {
    max-width: 66%;
    flex-shrink: 0;
    flex-grow: 1;
  }
  &__sidebar {
    margin-left: 50px;
    flex-shrink: 1;
    flex-grow: 1;
  }
  &--mobile {
    flex-direction: column;
    .MainContent__content {
      max-width: 100%;
    }
    .MainContent__sidebar {
      position: fixed;
      padding: 12px;
      margin-left: 0px;
      max-width: 300px;
      width: 100%;
      height: calc(100% - 60px);
      left: 0;
      top: 60px;
      background-color: #121212;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(-100%);
      transition: all 0.3s;
      &--show {
        transform: translateX(0);
      }
    }
  }
}
.burger {
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #4BB660;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: 10px;
  }

  span:nth-child(4) {
    top: 20px;
  }
  &__checkbox {
    display: none;
  }
  &--open {
    span:nth-child(1) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
    span:nth-child(4) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
  }
}
</style>
