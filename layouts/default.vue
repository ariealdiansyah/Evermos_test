<template>
  <v-app>
    <v-app-bar app elevate-on-scroll dense>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Evermos Test',
    };
  },
};
</script>

<style lang="scss">
.v-toolbar--dense .v-toolbar__content,
.v-toolbar--dense .v-toolbar__extension {
  justify-content: center !important;
}
</style>
