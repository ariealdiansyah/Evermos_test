<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col v-for="item in list" :key="item.id" cols="4">
          <ProductList :data="item" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'IndexPage',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('catfood', {
      list: 'list',
    }),
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await this.$store.dispatch('catfood/getDataList');
    },
  },
};
</script>
