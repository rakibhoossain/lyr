<template>
<div>
  <!-- <nuxt-link to="/inspire">Inspire</nuxt-link> -->
  <v-container
      class="mb-6"
    >
      <v-row>
        <v-col
          v-for="n in 10"
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
