<template>
<div>
  <nuxt-link to="/inspire">Inspire</nuxt-link>
  <vue-plyr>
    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
  </vue-plyr>
  <vue-plyr>
  <video
    controls
    crossorigin
    playsinline
    data-poster="https://i.ytimg.com/vi_webp/D63cFlh7TiI/maxresdefault.webp"
  >
    <source
      size="720"
      src="file:///C:/Users/serak/Downloads/screen-capture%20(20).webm"
      type="video/mp4"
    />
    <source
      size="1080"
      src="file:///C:/Users/serak/Downloads/screen-capture%20(20).webm"
      type="video/mp4"
    />
    <track
      default
      kind="captions"
      label="English captions"
      src="/path/to/english.vtt"
      srclang="en"
    />
  </video>
</vue-plyr>
</div>
</template>
