<template>
<div>
  <!-- <nuxt-link to="/inspire">{{$auth.user.name}}</nuxt-link> -->
  <v-container
      class="mb-6"
    >
      <v-row>
        <v-col
          v-for="n in 100"
          :key="n"
        >
          <vue-plyr>
            <div class="plyr__video-embed">
                <iframe src="https://player.vimeo.com/video/352286947?title=0&portrait=0&byline=0&autoplay=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>
          </vue-plyr>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
export default {
    // middleware: 'auth'
}
</script>
