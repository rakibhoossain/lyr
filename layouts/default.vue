<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <v-list>
        <v-list-item v-if="$auth.loggedIn">
          <v-list-item-action>
              <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$auth.user.name" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>



      </v-list>
    </v-navigation-drawer>




    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn
            icon
            @click.stop="miniVariant = !miniVariant"
        >
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" /> -->


    <!-- <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <node v-for="(nav, i) in navs" :key="i" :node="nav"></node>
    </v-toolbar-items>

      <v-spacer /> -->


      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->



    <!-- </v-app-bar> -->


  <v-app-bar
  :clipped-left="clipped"
      fixed
      app>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn
            icon
            @click.stop="miniVariant = !miniVariant"
        >
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />

    <!-- <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>Link One</v-btn>
      <v-btn text>Link Two</v-btn>
      <v-btn text>Link Three</v-btn>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          router
          exact
        >
            <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-action>
        </v-list-item>


    <v-menu offset-x open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          router
          exact
        >
            <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu>


      </v-list>
    </v-menu>





    </v-toolbar-items>
  </v-app-bar>


    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->


    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Node from '~/components/Node.vue'
export default {
    components: {
    Node
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        // {
        //   icon: 'mdi-apps',
        //   title: 'lyr',
        //   to: '/'
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // },
        {
          icon: 'mdi-video',
          title: 'Videos',
          to: '/video',
          children: [
                {
                    icon: 'mdi-apps',
                    title: 'Todo',
                    to: '/todo'
                },
                {
                    icon: 'mdi-video-plus',
                    title: 'Video Upload',
                    to: '/upload-video'
                },
            ]
        },
        {
          icon: 'mdi-apps',
          title: 'Todo',
          to: '/todo'
        },
        {
          icon: 'mdi-video-plus',
          title: 'Video Upload',
          to: '/upload-video'
        }
      ],
    navs: [
        // {
        //   icon: 'mdi-apps',
        //   title: 'lyr',
        //   to: '/'
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // },
        {
          icon: 'mdi-video',
          title: 'Videos',
          to: '/video',
          children: [
                {
                    icon: 'mdi-apps',
                    title: 'Todo',
                    to: '/todo'
                },
                {
                    icon: 'mdi-video-plus',
                    title: 'Video Upload',
                    to: '/upload-video'
                },
            ]
        },
        {
          icon: 'mdi-apps',
          title: 'Todo',
          to: '/todo'
        },
        {
          icon: 'mdi-video-plus',
          title: 'Video Upload',
          to: '/upload-video'
        }
      ],
      miniVariant: false,
      right: true,
    //   rightDrawer: false,
      title: 'lyr'
    }
  }
}
</script>
