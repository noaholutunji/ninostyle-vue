<template>
  <CheckOut />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CheckOut from '@/components/CheckOut/CheckOut.vue';

@Component({
  components: { CheckOut },
})
export default class CheckOutPage extends Vue {}
</script>
