<template>
  <Register />
</template>
<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import Register from '@/components/Register/Register.vue';

@Component({
  components: { Register },
})
export default class RegisterPage extends Vue {}
</script>
