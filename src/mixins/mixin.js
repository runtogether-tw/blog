export const myMixin = {
  methods: {
    getGamesVar(gameUrl) {
      const matches = gameUrl.match(/([a-zA-Z0-9_]*)[/]?([a-zA-Z0-9_]*)[#]?([a-zA-Z0-9_]*)[?]?([a-zA-Z0-9_&=-]*)*/);
      return {
        game: matches[1] || null,
        level: matches[2] || null,
        category: matches[3] || null,
        var: matches[4] || null,
      };
    },
    getPostImg(content) {
      if (!content) {
        return null;
      }
      const matches = content.match(/<img src="([a-zA-Z0-9:/.]*)"/);
      if (!matches) {
        return null;
      }
      return matches[1] || null;
    },
  },
};
export default myMixin;
