import Vuetify from 'vuetify';
import DefaultLayout from '@/layouts/Default.vue';
import '@/assets/sass/app.scss';
import 'vuetify/dist/vuetify.min.css';

const pathPrefix = '/blog';

export default function (Vue, { appOptions, router, head, isClient }) { // eslint-disable-line
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  });
  head.script.push({
    src: 'https://platform.twitter.com/widgets.js',
    body: false,
  });
  head.script.push({
    src: `${pathPrefix}/js/embed.js`,
    body: false,
  })
  // Set default layout as a global component
  Vue.use(Vuetify);
  const opts = {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#4BB660',
          white: '#EEEEEE',
        },
      },
    },
    icons: {
      iconfont: 'fa',
    },
  };
  appOptions.vuetify = new Vuetify(opts); // eslint-disable-line

  router.options.scrollBehavior = (to, from, savedPosition) => { // eslint-disable-line
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return window.scrollTo({ top: document.querySelector(decodeURI(to.hash)).offsetTop - 70, behavior: 'smooth' });
    }
    return { x: 0, y: 0 };
  };

  Vue.component('Layout', DefaultLayout);
  Vue.filter('time', (val) => {
    let hours = '';
    let minutes = '';
    let seconds = '';
    const matches = val.match(/^PT(?:(\d+\.*\d*)H)?(?:(\d+\.*\d*)M)?(?:(\d+\.*\d*)S)?$/);
    hours = parseInt(matches[1] || '0', 10).toString().padStart(2, 0);
    minutes = parseInt(matches[2] || '0', 10).toString().padStart(2, 0);
    seconds = parseInt(matches[3] || '0', 10).toString().padStart(2, 0);
    return `${hours}:${minutes}:${seconds}`;
  });
}
