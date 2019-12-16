<template>
  <EditProduct />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import EditProduct from '@/components/EditProduct/EditProduct.vue';

@Component({
  components: { EditProduct },
})
export default class EditProductForm extends Vue {}
</script>
