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
              <p>{{ reservation.date | formatDate }}</p>
              <p>{{ reservation.parking }}</p>
            </v-card-text>
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
    ...mapActions(["fetchAllReservations"]),
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