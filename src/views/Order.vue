<template>
  <Order />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Order from '@/components/Order/Order.vue';

@Component({
  components: { Order },
})
export default class OrderPage extends Vue {}
</script>
