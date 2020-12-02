<template>
  <v-app>
    <v-main>
      <Navbar />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import axios from "axios";

export default {
  name: "App",

  components: { Navbar },

  data: () => ({}),
  created() {
    if (localStorage.getItem("token")) {
      axios
        .get("http://localhost:4000/api/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$store.dispatch("setUser", response.data.data);
        });
    }
  },
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
  color: grey;
}
#app {
  background-color: #eee;
}

.parking-space {
  border-radius: 3px;
  color: #fff;
  margin-bottom: 2px;
  width: 5rem;
  font-weight: 600;
  font-size: 0.85rem;
}

.eventWindow {
  overflow-y: scroll;
  max-height: 30vh;
}

.green-text {
  color: green;
}

.yellow-text {
  color: orange;
}

.red-text {
  color: red;
}
</style>