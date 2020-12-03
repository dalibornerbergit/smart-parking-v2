<template>
  <div>
    <div v-if="!getUserReservations.length" class="text-center mt-15">
      <v-progress-circular
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
    </div>

    <v-container>
      <!-- Reservations -->
      <div class="text-right py-3">
        <v-btn
          @click="dialog = true"
          depressed
          color="blue-grey"
          class="white--text"
          ><v-icon left>mdi-plus</v-icon> reservation</v-btn
        >
      </div>
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="reservation in getUserReservations"
          :key="reservation.id"
        >
          <v-card elevation="0">
            <v-card-title class="blue-grey white--text py-2"></v-card-title>
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

    <!-- Dialogs -->
    <v-dialog max-width="600px" v-model="dialog">
      <CreateReservation @close="dialog = false" />
    </v-dialog>
  </div>
</template>

<script>
import CreateReservation from "../components/CreateReservation";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CreateReservation,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapActions(["fetchUserReservations", "deleteReservation"]),
    async fetchReservations() {
      await this.fetchUserReservations();
    },
  },
  computed: {
    ...mapGetters(["getUserReservations"]),
  },
  created() {
    this.fetchReservations();
  },
};
</script>