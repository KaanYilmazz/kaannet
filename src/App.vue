<template>

  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-badge-account-horizontal</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-hard-hat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Education and Experience</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-desk-lamp</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-phone-in-talk</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-bottom-navigation class="my-4">x</v-bottom-navigation>
      <v-bottom-navigation class="my-4">x</v-bottom-navigation>
      <v-bottom-navigation class="my-4">x</v-bottom-navigation>
      <v-bottom-navigation class="my-4">x</v-bottom-navigation>
    </v-navigation-drawer>

    <v-app-bar color="secondary"
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color:#F50057; font-size: x-large; font-family: 'Comic Sans MS'">Kaan Yılmaz</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row>
          <v-col >
            <welcome></welcome>
            <about-me></about-me>
            <history></history>
            <portfolio></portfolio>
            <contact></contact>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      Kaan Yılmaz
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Welcome from "@/components/Welcome";
  import AboutMe from "@/components/AboutMe";
  import History from "@/components/History";
  import Portfolio from  "@/components/Portfolio"
  import Contact from  "@/components/Contact"
  export default {
    name: "App",
    components: {
      Portfolio,
      History,
      AboutMe,
      Welcome,
      Contact
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
  }
  // <vue-particles color="#dedede"></vue-particles>
</script>