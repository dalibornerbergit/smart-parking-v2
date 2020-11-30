<template>
  <div>
    <div v-if="!reservations.length" class="text-center mt-15">
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
          v-for="reservation in reservations"
          :key="reservation.id"
        >
          <v-card elevation="0">
            <v-card-text class="blue-grey white--text py-2">{{
              reservation.user.email
            }}</v-card-text>
            <v-card-text>
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
import axios from "axios";

export default {
  data: () => ({
    reservations: [],
  }),
  created() {
    axios
      .get("http://localhost:4000/api/reservations", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((resposne) => {
        this.reservations = resposne.data.data;
      });
  },
};
</script>

<style>
</style>