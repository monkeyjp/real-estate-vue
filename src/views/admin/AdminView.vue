<script setup>
import useProperties from "@/composables/useProperties";
import { propertyPrice } from "@/helpers";

const { propertiesCollection, deleteItem } = useProperties();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

  <v-btn color="blue" variant="flat" :to="{ name: 'new-property' }">
    New Property
  </v-btn>
  <v-card class="mx-auto mt-10">
    <v-list-item v-for="property in propertiesCollection" :key="property.id">
      <template v-slot:prepend>
        <v-list-item-media :start="true">
          <img :src="property.photo" alt="" width="180" />
        </v-list-item-media>
      </template>
      <v-list-item-title>{{ property.title }}</v-list-item-title>
      <v-list-item-subtitle>{{
        propertyPrice(property.price)
      }}</v-list-item-subtitle>
      <template v-slot:append>
        <v-btn
          color="info"
          flat
          class="mr-2"
          :to="{ name: 'edit-property', params: { id: property.id } }"
        >
          Edit
        </v-btn>
        <v-btn
          color="red-darken-3"
          flat
          @click="deleteItem(property.id, property.photo)"
        >
          Delete
        </v-btn>
      </template>
    </v-list-item>
  </v-card>
</template>
