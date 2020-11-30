<template>
  <div class="home d-flex justify-center aling-center">
    <div class="center">
      <v-img class="mx-auto" width="200px" height="150px" src="smartparking.png"></v-img>
      <h1>
        Welcome
        <span v-if="getUser" class="text-capitalize">{{ getUser.name }}</span>
        <span v-else class="text-capitalize">guest</span>
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>