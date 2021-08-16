const imgPlugin = require('./src/plugins/img');
const pathPrefix = '/blog';

module.exports = {
  siteName: 'Run Together TW',
  pathPrefix,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        refs: {
          author: {
            typeName: 'Author',
            create: true,
          },
          game: {
            typeName: 'Game',
            create: true,
          },
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#',
            },
          },
          plugins: [
            imgPlugin,
            ['gridsome-plugin-remark-twitter', {
              align: 'center',
              theme: 'dark',
              omitScript: true,
            }],
          ],
        },
      },
    },
  ],
  templates: {
    Post: '/post/:author/:fileInfo__name',
    Author: '/author/:title',
    Game: '/game/:title',
    Tag: '/tag/:title_raw',
  },
  transformers: {
    remark: {
      // global remark options
    },
  },
};
