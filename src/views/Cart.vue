<template>
  <Cart />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Cart from '@/components/Cart/Cart.vue';

@Component({
  components: { Cart },
})
export default class CartPage extends Vue {}
</script>
