<template>
  <!-- <v-card dense class="mx-auto my-2"> -->
  <v-row>
    <v-col cols="3">
      <v-img v-if="data.img" contain :src="require(`~/assets/image/${data.img}`)" />
    </v-col>
    <v-col cols="9">
      <v-card-title>{{ data.name }}</v-card-title>
      <v-card-text>
        <div class="primary--text">
          <v-icon color="yellow"> mdi-star </v-icon>
          {{ data.rating }} dari ({{ data.totalRate }}) Ulasan
        </div>
        <div class="my-4 text-subtitle-1">Harga : {{ data.price }}</div>
        <v-divider />
        <div class="mt-4 text-subtitle-1">
          Makanan {{ data.name }} merupakan makanan kucing yang sangat bagus untuk anabul
          anda, selain menyehatkan, makanan ini juga dapat membuat bulu anabul anda
          semakin lebat dan halus
        </div>
      </v-card-text>
      <v-row class="justify-end ma-4">
        <v-btn outlined depressed color="blue" text @click="back"> Back </v-btn>
      </v-row>
    </v-col>
  </v-row>
  <!-- </v-card> -->
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    data() {
      return this.$store.state.catfood.detail;
    },
  },
  async mounted() {
    await this.$store.dispatch('catfood/getDataDetail', this.id);
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
