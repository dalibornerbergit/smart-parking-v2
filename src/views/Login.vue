<template>
  <div>
    <v-card class="mx-auto mt-15" max-width="600px">
      <v-card-title
        class="blue-grey white--text overline d-flex justify-center"
      >
        sum smart parking
      </v-card-title>
      <v-card-text>
        <v-img
          class="mx-auto ma-3"
          max-height="150"
          max-width="250"
          src="smartparking.png"
        ></v-img>
        <v-text-field
          color="blue-grey"
          clearable
          v-model="email"
          type="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          color="blue-grey"
          clearable
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn @click="login" depressed class="blue-grey white--text">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      axios
        .post("http://localhost:4000/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>