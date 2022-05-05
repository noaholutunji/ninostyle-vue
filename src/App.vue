<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footbar></app-footbar>
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navigation.vue';
import Footbar from './components/Footer/Footer.vue';
export default {
  components: {
    appNavbar: Navbar,
    appFootbar: Footbar,
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
  },
};
</script>

<style></style>
