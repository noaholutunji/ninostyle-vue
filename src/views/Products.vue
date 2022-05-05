<template>
  <Products />
</template>
<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import Products from '@/components/Products/Products.vue';

@Component({
  components: { Products },
})
export default class ProductsPage extends Vue {}
</script>
