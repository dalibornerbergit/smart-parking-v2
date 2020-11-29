<template>
  <div v-if="loaded">
    <h1 class="title">Dashboard</h1>

    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div
            v-for="parking in allParkingSpaces[0].parkingSpaces"
            :key="parking.id"
            class="d-flex justify-center"
          >
            <div
              v-if="!parking.occupied"
              class="text-center parking-space blue-grey lighten-4 black--text"
            >
              {{ parking.id }}
            </div>
            <div
              v-if="parking.occupied"
              class="text-center parking-space blue-grey"
            >
              {{ parking.id }}
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div
            v-for="parking in allParkingSpaces[1].parkingSpaces"
            :key="parking.id"
            class="d-flex justify-center"
          >
            <div
              v-if="!parking.occupied"
              class="text-center parking-space blue-grey lighten-4 black--text"
            >
              {{ parking.id }}
            </div>
            <div
              v-if="parking.occupied"
              class="text-center parking-space blue-grey"
            >
              {{ parking.id }}
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div
            v-for="parking in allParkingSpaces[2].parkingSpaces"
            :key="parking.id"
            class="d-flex justify-center"
          >
            <div
              v-if="!parking.occupied"
              class="text-center parking-space blue-grey lighten-4 black--text"
            >
              {{ parking.id }}
            </div>
            <div
              v-if="parking.occupied"
              class="text-center parking-space blue-grey"
            >
              {{ parking.id }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    loaded: false,
    parkingSpaces: [],
  }),
  methods: {
    ...mapActions(["fetchParkingSpaces"]),
    async fetchAllParkingSpaces() {
      await this.fetchParkingSpaces(1);
      await this.fetchParkingSpaces(3);
      await this.fetchParkingSpaces(2);
    },
  },
  computed: {
    ...mapGetters(["allParkingSpaces"]),
  },
  created() {
    this.fetchAllParkingSpaces().then(() => {
      this.loaded = true;
    });
  },
};
</script>