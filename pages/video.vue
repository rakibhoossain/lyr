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
            <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
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
