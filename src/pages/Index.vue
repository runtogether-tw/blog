<template>
  <Layout>
    <section class="banner">
      <div class="banner__text">
        <div class="banner__title container">
          Run Together TW
        </div>
        <div class="banner__p container">
          收集與整理Speedrun相關資訊
        </div>
      </div>
      <div class="banner__bg">
        <banner-bg></banner-bg>
      </div>
      <div class="banner__arrow">
        <arrow></arrow>
      </div>
    </section>
  </Layout>
</template>

<script>
import bannerBg from '@/components/BannerBg.vue';
import arrow from '@/components/Arrow.vue';

export default {
  metaInfo: {
    title: '首頁',
  },
  components: {
    bannerBg,
    arrow,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.banner {
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
  &__text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
  }
  &__title {
    font-size: 3rem;
    font-weight: bold;
    color: #99D3A1;
  }
  &__bg {
    position: absolute;
    bottom: 10%;
    right: 15px;
    width: 100%;
    height: 80%;
    text-align: right;
    z-index: 2;
    color: #202020;
  }
  &__arrow {
    position: absolute;
    left: -20%;
    bottom: 10%;
    width: 100%;
    height: 80%;
    text-align: left;
    z-index: 2;
    color: #202020;
  }
}
</style>
