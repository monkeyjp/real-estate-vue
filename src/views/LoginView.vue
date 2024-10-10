<script setup></script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-tittle class="text-h4 font-weight-bold" tag="h3"
      >Login</v-card-tittle
    >
    <v-form class="mt-5">
      <v-text-field type="email" label="Email" bg-color="blue-grey-lighten-5" />
      <v-text-field
        type="password"
        label="Password"
        bg-color="blue-grey-lighten-5"
      />
      <v-btn color="pink-accent-3" block>Login</v-btn>
    </v-form>
  </v-card>
</template>
