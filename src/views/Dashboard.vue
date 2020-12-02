<template>
  <div>
    <div v-if="!loaded" class="text-center mt-15">
      <v-progress-circular
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
    </div>

    <v-container class="pb-0" v-if="loaded">
      <v-row>
        <!-- Legend -->
        <v-col cols="12" md="5">
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
          <v-card max-width="300px" class="mx-auto my-5" elevation="0">
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
          <v-card max-width="500px" class="mx-auto" elevation="0">
            <v-card-title class="blue-grey white--text overline py-2"
              >Event log</v-card-title
            >
            <v-card-text class="eventWindow py-2">
              <div
                class="py-2 border"
                v-for="event in socketEvents"
                :key="event.id"
              >
                {{ event.created_at.substring(0, 10) | formatDate }} -
                {{ event.created_at.substring(11) }} -
                <span v-if="!event.occupied" class="overline"
                  ><b>{{ event.id_parking_space }}</b> oslobođen
                  <v-icon right large color="blue-grey lighten-4">
                    mdi-checkbox-blank</v-icon
                  >
                </span>
                <span v-if="event.occupied" class="overline"
                  ><b>{{ event.id_parking_space }}</b> zauzet
                  <v-icon right large color="blue-grey">
                    mdi-checkbox-blank</v-icon
                  >
                </span>
                <v-divider></v-divider>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Parking rows -->
        <v-col class="py-0" cols="12" md="7">
          <v-row class="d-flex justify-center">
            <v-col class="text-center pt-0" cols="12" md="2">
              <span class="overline">Zona 1</span>
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

            <v-col class="text-center pt-0" cols="12" md="2">
              <span class="overline">Zona 2</span>
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

            <v-col class="text-center pt-0" cols="12" md="2">
              <span class="overline">Zona 3</span>
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
    socketEvents: [
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 12,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 1,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 34,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 44,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 34,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 1,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 1,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 8,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 30,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 1,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 34,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
      {
        created_at: "2020-12-02 14:23:08",
        handicap_available: 0,
        handicap_occupied: 0,
        id_parking_lot: 1,
        id_parking_lot_type: 1,
        id_parking_space: 34,
        name: "4",
        normal_available: 31,
        normal_occupied: 6,
        occupied: 0,
        parking_space_name: "4",
        type: "Normal",
      },
    ],
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
      this.fetchParkingSpaces();
      this.socketEvents.unshift(data);
    }),
      this.fetchParkingSpaces().then(() => {
        this.loaded = true;
      });
  },
};
</script>