const nodeExternals = require('webpack-node-externals');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const helix = axios.create({
  baseURL: 'https://crs-dlbot.herokuapp.com/helix/',
  headers: { 'Origin': 'http://runtogether-tw.github.io', },
});

module.exports = function server(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.onCreateNode((options) => {
    if (options.internal.typeName === 'Post') {
      options.slug = `${options.author}-${options.fileInfo.name}`; //eslint-disable-line
      console.log(options.slug);
    }
    return options;
  });

  api.loadSource(async ({ addCollection, getCollection }) => {
    console.log('loadSource');
    const authors = {};
    const reverseMapTwitchID = {};
    const twitchID = [];
    const dir = path.join(__dirname, '/data/author/');
    fs.readdirSync(dir).forEach((file) => {
      authors[file.replace(/\.json$/, '')] = require(dir + file); // eslint-disable-line
      if (authors[file.replace(/\.json$/, '')].twitch) {
        twitchID.push(authors[file.replace(/\.json$/, '')].twitch);
        reverseMapTwitchID[authors[file.replace(/\.json$/, '')].twitch] = file.replace(/\.json$/, '');
      }
    });
    console.log(reverseMapTwitchID);
    const params = twitchID.reduce((a, b) => (`${b}&login=${a}`));
    const { data } = await helix.get(`/users?login=${params}`);
    const collection = addCollection({
      typeName: 'Twitch',
    });
    data.data.forEach((item) => {
      collection.addNode({
        id: reverseMapTwitchID[item.login],
        displayName: item.display_name,
        Twitchid: item.login,
        numberId: item.id,
        img: item.profile_image_url,
        ...authors[reverseMapTwitchID[item.login]],
      });
    });
    getCollection('Author').addReference('title', 'Twitch');
  });
  /**
  api.createPages(({ createPage }) => {
  });
  */
};
