<script setup>
defineProps({
  property: {
    type: Object,
    required: true,
  },
  price: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <v-col cols="12" md="4">
    <v-card>
      <v-img :src="property.photo" height="250" cover />
      <v-card-title>
        {{ property.title }}
      </v-card-title>
      <v-card-text class="text-truncate">
        {{ property.description }}
      </v-card-text>
      <v-card-text class="text-h5 font-weight-bold">
        Price: {{ price(property.price) }}
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          block
          color="info"
          variant="flat"
          :to="{ name: 'property', params: { id: property.id } }"
          >More Info</v-btn
        >
      </template>
    </v-card>
  </v-col>
</template>
