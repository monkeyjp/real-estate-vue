<script setup>
import useProperties from "@/composables/useProperties";
import Property from "@/components/Property.vue";
import { propertyPrice } from "@/helpers";

const { filteredProperties, pool } = useProperties();
</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">Vue Real Estate</h1>
  <v-card class="py-10" flat>
    <v-card-title class="text-h5">
      Search
      <v-checkbox label="Pool" v-model="pool" />
    </v-card-title>
    <v-row>
      <Property
        v-for="property in filteredProperties"
        :key="property.id"
        :property="property"
        :price="propertyPrice"
      />
    </v-row>
  </v-card>
</template>
