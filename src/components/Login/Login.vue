<template>
  <mdb-container class="pb-5">
    <mdb-row class="justify-content-center">
      <mdb-col md="6">
        <mdb-card class="mt-5">
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-1">Login</p>
              <div class="grey-text">
                <mdb-input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  v-model="email"
                />

                <mdb-input
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  v-model="password"
                />
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="cyan" type="submit">Login</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCol,
  mdbRow,
  mdbContainer,
} from 'mdbvue';

export default {
  name: 'Basic',
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCol,
    mdbRow,
    mdbContainer,
  },

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password,
      });
    },
  },
};
</script>
