const visit = require('unist-util-visit');

function checkUrlType(inputUrl) {
  const twVod = inputUrl.match(/^(?:https:\/\/www.twitch.tv\/videos\/)([\d]+)(?:\?)?(?:t=(\d*h?\d*m?\d*s?))?/);
  if (twVod) {
    return {
      type: 'twitchVod',
      id: twVod[1],
      time: twVod[2] || 0,
    };
  }
  const twClip = inputUrl.match(/^(?:https:\/\/clips.twitch.tv\/)([a-zA-Z0-9_\-/]+)/)
    || inputUrl.match(/^(?:https:\/\/www.twitch.tv\/)(?:[a-zA-Z0-9][\w]{2,24})\/clip\/([a-zA-Z]+)/);
  if (twClip) {
    return {
      type: 'twitchClip',
      id: twClip[1],
    };
  }
  const ytLink = inputUrl.match(/^.*(?:(?:youtu.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))\??v?=?([^#&?]*)(?:(?:&|\?)t=(\d*h?\d*m?\d*s?))?/);
  if (ytLink) {
    return {
      type: 'youtube',
      id: ytLink[1],
      time: ytLink[2] || 0,
    };
  }
  return false;
}

module.exports = () => {  // eslint-disable-line
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (!node.alt) {
        return node;
      }
      node.type = 'html'; // eslint-disable-line
      const urlType = checkUrlType(node.url);
      if (urlType) {
        switch (urlType.type) {
        case 'youtube':
          // eslint-disable-next-line
            node.value = `
            <figure>
              <div class="videoPlayer youtube">
                <div class="placeholder">
                  <img
                    referrerpolicy="no-referrer"
                    src="http://i3.ytimg.com/vi/${urlType.id}/maxresdefault.jpg"
                    data-type="youtube"
                    data-video="${urlType.id}"
                    data-time="${urlType.time}"
                    onclick="videoEmbed(this)"
                  />
                </div>
              </div>
              <figcaption>${node.alt}</figcaption>
            </figure>
            `;
          return node;
        case 'twitchVod':
          // eslint-disable-next-line
            node.value = `
            <figure>
              <div class="videoPlayer twitch">
                <div class="placeholder">
                  <img
                    referrerpolicy="no-referrer"
                    src="https://static-cdn.jtvnw.net/ttv-static/404_preview-1280x720.jpg"
                    data-type="twitchVod"
                    data-video="${urlType.id}"
                    data-time="${urlType.time}"
                    onclick="videoEmbed(this)"
                  />
                </div>
              </div>
              <figcaption>${node.alt}</figcaption>
            </figure>
            `;
          return node;
        case 'twitchClip':
          // eslint-disable-next-line
            node.value = `
            <figure>
              <div class="videoPlayer twitch">
                <div class="placeholder">
                  <img
                    referrerpolicy="no-referrer"
                    src="https://static-cdn.jtvnw.net/ttv-static/404_preview-1280x720.jpg"
                    data-type="twitchClip"
                    data-video="${urlType.id}"
                    onclick="videoEmbed(this)"
                  />
                </div>
              </div>
              <figcaption>${node.alt}</figcaption>
            </figure>
            `;
          return node;
        default:
          break;
        }
      }
      // eslint-disable-next-line
      node.value = `
        <figure>
          <img src="${node.url}" loading="lazy" alt="${node.alt}" />
          <figcaption>${node.alt}</figcaption>
        </figure>`;
      return node;
    });
  };
};
