<template>
  <NewProduct />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NewProduct from '@/components/NewProduct/NewProduct.vue';

@Component({
  components: { NewProduct },
})
export default class NewProductForm extends Vue {}
</script>
