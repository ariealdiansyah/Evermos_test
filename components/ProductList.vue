<template>
  <v-card class="mx-auto my-2">
    <v-img contain height="150" :src="require(`~/assets/image/${data.img}`)" />
    <v-card-title>{{ data.name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="data.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />
        <div class="grey--text ms-4">{{ data.rating }} ({{ data.totalRate }})</div>
      </v-row>
      <div class="mt-4 text-subtitle-1">{{ data.price }}</div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn depressed dense small color="primary" @click="reserve(data.id)">
        See Detail
      </v-btn>
      <!-- <v-btn color="deep-purple lighten-2" text @click="reserve(data.id)">
        See Detail
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    reserve(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style></style>
