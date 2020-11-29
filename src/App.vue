<template>
  <v-app>
    <v-main>
      <div>
        <Navbar />
      </div>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: { Navbar },

  data: () => ({}),
  created() {
    this.$socket.on("parking-lot-state-change", () => {
      console.log("DoDo");
    });
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
}
</style>