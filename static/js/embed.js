function videoEmbed(video) {
  const baseURL = window.location.host;
  switch (video.dataset.type) {
    case 'youtube':
      video.parentNode.outerHTML = `
          <iframe
          loading="lazy"
          width="400"
          height="225"
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/${video.dataset.video}?start=${video.dataset.time}"
        ></iframe>
      `;
      break;
      case 'twitchVod':
        video.parentNode.outerHTML = `
          <iframe
            loading="lazy"
            width="400"
            height="225"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            src="https://player.twitch.tv/?video=v${video.dataset.video}&time=${video.dataset.time}&autoplay=false&parent=${baseURL}"
          ></iframe>
        `;
        break;
      case 'twitchClip':
        video.parentNode.outerHTML = `
          <iframe
            loading="lazy"
            width="400"
            height="225"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            src="https://clips.twitch.tv/embed?clip=${video.dataset.video}&autoplay=false&parent=${baseURL}"
          ></iframe>
        `;
        break;
    default:
      break;
  }
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
