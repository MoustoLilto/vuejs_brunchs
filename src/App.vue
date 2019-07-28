<template>
  <v-app>
    <!-- Small Screen Toolbar -->
    <v-navigation-drawer v-model="sideNavShown" right temporary app>
      <v-list>
        <v-list-tile
                v-for="item in menuItems" :key="item.id"
                router :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Normal Screen Toolbar -->
    <v-toolbar app>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">Brunchis-toi</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native.stop="showSideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-items v-for="item in menuItems" :key="item.id" class="hidden-xs-only">
        <v-btn flat router :to="item.link">
          <v-icon>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      sideNavShown: false,
      menuItems:[
        {id:0, title:'Accueil', icon:'home', link:"/"},
        {id:1, title:'Èvénements', icon:'event', link:"/events/brunchs"},
        {id:2, title:'Gallerie', icon:'store', link:"/gallery"},
        {id:3, title:'Contactez-nous', icon:'contact_mail', link:"/contact-us"}
      ]
    }
  },

  methods: {
    showSideNav: function(){
      this.sideNavShown = !this.sideNavShown
    }
  }
}
</script>
