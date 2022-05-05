<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Home from '@/components/Home/Home.vue';

@Component({
  components: { Home },
})
export default class HomePage extends Vue {}
</script>
