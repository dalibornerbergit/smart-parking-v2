<template>
  <div>
    <div v-if="!getAllReservations.length" class="text-center mt-15">
      <v-progress-circular
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
    </div>

    <v-container>
      <!-- Reservations -->
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="reservation in getAllReservations"
          :key="reservation.id"
        >
          <v-card elevation="0">
            <v-card-title class="blue-grey white--text body-2 py-2">{{
              reservation.user.email
            }}</v-card-title>
            <v-card-text class="py-2">
              <div><b>Paking: </b>{{ reservation.parking }}</div>
              <div><b>Date: </b>{{ reservation.date | formatDate }}</div>
              <div><b>Arrival: </b>{{ reservation.time }}</div>
              <div><b>Time of retention: </b>{{ reservation.quantity }} h</div>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-spacer></v-spacer>
              <v-btn
                small
                depressed
                color="grey"
                class="white--text"
                @click="deleteReservation(reservation.id)"
                ><v-icon small>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchAllReservations", "deleteReservation"]),
    async fetchReservations() {
      await this.fetchAllReservations();
    },
  },
  computed: {
    ...mapGetters(["getAllReservations"]),
  },
  created() {
    this.fetchReservations();
  },
};
</script>