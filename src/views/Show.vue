<template>
  <Show />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Show from '@/components/Show/Show.vue';

@Component({
  components: { Show },
})
export default class ShowPage extends Vue {}
</script>
