<template>
  <div>
    <div v-if="!loaded" class="text-center mt-15">
      <v-progress-circular
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
    </div>

    <v-container v-if="loaded">
      <v-row>
        <!-- Legend -->
        <v-col cols="12" md="6">
          <div class="text-center">
            <span
              >Slobodna parking mjesta<v-icon
                right
                large
                color="blue-grey lighten-4"
              >
                mdi-checkbox-blank</v-icon
              ></span
            >
            <v-spacer></v-spacer>
            <span
              >Zauzeta parking mjesta<v-icon right large color="blue-grey">
                mdi-checkbox-blank</v-icon
              ></span
            >
          </div>

          <!-- Statistics -->
          <v-card class="mx-auto my-5" elevation="0">
            <v-card-title class="d-flex justify-center">
              Slobodna mjesta
            </v-card-title>
            <v-card-text class="text-center">
              <h1 class="title">
                <span :class="`${counterColor} title`">{{
                  availableParkingSpaces
                }}</span
                >/62
              </h1>
            </v-card-text>
          </v-card>

          <!-- Event log -->
          <v-card max-height="100px" elevation="0">
            <v-card-title class="blue-grey white--text overline py-2"
              >Event log</v-card-title
            >
            <v-card-text class="py-2">
              <p v-for="event in socketEvents" :key="event.id">
                {{ event.created_at }} - {{ event.occupied }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Parking rows -->
        <v-col class="py-0" cols="12" md="6">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="2">
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

            <v-col cols="12" md="2">
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

            <v-col cols="12" md="2">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    socketEvents: [],
    loaded: false,
    parkingSpaces: [],
  }),
  sockets: {
    connect: function () {
      console.log("Socket connected");
    },
  },
  methods: {
    ...mapActions(["fetchParkingSpaces"]),
  },
  computed: {
    ...mapGetters(["allParkingSpaces"]),
    availableParkingSpaces() {
      return (
        this.allParkingSpaces[0].normal_available +
        this.allParkingSpaces[1].normal_available +
        this.allParkingSpaces[2].normal_available
      );
    },
    counterColor() {
      if (this.availableParkingSpaces < 10) {
        return "red-text";
      } else if (this.availableParkingSpaces < 31) {
        return "yellow-text";
      } else return "green-text";
    },
  },
  created() {
    this.sockets.subscribe("parking-lot-ramp-state-change", (data) => {
      // this.allParkingSpaces[data.id_parking_lot - 1].normal_available =
      //   data.normal_available;

      this.fetchParkingSpaces();

      this.socketEvents.push(data);
    }),
      this.fetchParkingSpaces().then(() => {
        this.loaded = true;
      });
  },
};
</script>