<template>
  <v-card>
    <v-card-title class="blue-grey white--text overline"
      >Create reservation</v-card-title
    >
    <v-card-text class="py-2">
      <!-- Parking -->
      <v-select
        prepend-icon="mdi-car"
        :items="parkingSpaces"
        label="Parking"
        v-model="reservation.parking"
      ></v-select>
      <!-- Date -->
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formattedDate"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="reservation.date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      <!-- Time of arrival -->
      <v-menu
        ref="menu"
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="reservation.time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="reservation.time"
            label="Time of arrival"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu1"
          v-model="reservation.time"
          full-width
          @click:minute="$refs.menu.save(reservation.time)"
        ></v-time-picker>
      </v-menu>
      <!-- Retention time -->
      <v-select
        prepend-icon="mdi-clock"
        label="Retention time (hours)"
        :items="quantity"
        v-model="reservation.quantity"
      >
      </v-select>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn @click="submit" depressed color="blue-grey" class="white--text"
        >create</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    reservation: {
      parking: null,
      date: null,
      time: null,
      quantity: null,
    },
    parkingSpaces: [1, 2, 3, 4],
    quantity: [1, 2, 3],
    menu1: false,
    menu2: false,
  }),
  computed: {
    formattedDate() {
      if (this.reservation.date)
        return this.moment(this.reservation.date).format("DD.MM.YYYY.");
      else return null;
    },
  },
  methods: {
    ...mapActions(["createReservation"]),
    submit() {
      this.createReservation(this.reservation).then(() => {
        this.$emit("close");
      });
    },
  },
};
</script>

<style>
</style>