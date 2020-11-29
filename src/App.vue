<template>
  <v-app>
    <v-main>
      <div>
        <Navbar />
      </div>

      <router-view class="pa-4" />
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
  border: 1px solid #000;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
  margin-bottom: 8px;
  width: 10rem;
  font-weight: 600;
}
</style>