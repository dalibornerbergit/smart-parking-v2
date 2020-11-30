<template>
  <nav>
    <!-- Nav -->
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span>smart</span>
        <span class="font-weight-bold">parking</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->
      <div class="d-none d-md-flex mx-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" text v-bind="attrs" v-on="on">
              <v-icon left>mdi-chevron-down</v-icon>menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
              link
              :to="link.route"
            >
              <v-list-item-title>
                <v-icon left>{{ link.icon }}</v-icon>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Email -->
      <span class="d-none d-sm-flex blue-grey py-1 px-2 rounded">
        <span class="white--text" v-if="getUser">{{ getUser.email }}</span>
        <span class="white--text" v-else>Guest</span>
      </span>

      <!-- Logout -->
      <div v-if="getUser">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="logOut">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </template>
          <span class="red--text">Logout</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" class="blue-grey">
      <v-row class="mt-5">
        <v-col class="d-flex justify-center">
          <v-avatar rounded class="white" size="75">
            <v-icon large color="blue-grey">mdi-parking</v-icon>
          </v-avatar>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col class="text-center">
          <span class="overline white--text">sum smart parking</span>
        </v-col>
      </v-row>

      <!-- List of actions -->
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text text-capitalize">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: false,
    email: "",
    links: [
      { icon: "mdi-home", text: "home", route: "/" },
      { icon: "mdi-monitor-dashboard", text: "dashboard", route: "/dashboard" },
      {
        icon: "mdi-ticket-account",
        text: "reservations",
        route: "/reservations",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$store.dispatch("getUser", null);
      window.location.href = "/login";
    },
  },
};
</script>

<style>
</style>