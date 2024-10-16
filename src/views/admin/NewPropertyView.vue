<script setup>
const items = [1, 2, 3, 4, 5];
</script>

<template>
  <v-car max-width="800" flat class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">
      New Property
    </v-card-title>
    <v-card-subtitle class="text-h5">
      Add a new property filling the form
    </v-card-subtitle>
    <v-form class="mt-10">
      <v-text-field class="mb-5" label="Property Title" />
      <v-file-input
        accept="image/jpeg"
        label="Photo"
        prepend-icon="mdi-camera"
        class="mb-5"
      />
      <v-text-field class="mb-5" label="Price" />
      <v-row>
        <v-col cols="12" md="4">
          <v-select label="Rooms" class="mb-5" :items="items" />
        </v-col>
        <v-col cols="12" md="4">
          <v-select label="WC" class="mb-5" :items="items" />
        </v-col>
        <v-col cols="12" md="4">
          <v-select label="Parking" class="mb-5" :items="items" />
        </v-col>
      </v-row>
      <v-textarea class="mb-5" label="Description"></v-textarea>
      <v-checkbox label="Pool" />
      <v-btn class="pink-accent-3" block>Add Property</v-btn>
    </v-form>
  </v-car>
</template>
