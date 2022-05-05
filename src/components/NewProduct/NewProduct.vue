<template>
  <mdb-container>
    <mdb-row class="justify-content-center mt-5">
      <mdb-col md="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-1">Add New Product</p>
              <div class="grey-text">
                <mdb-input
                  label="Name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  v-model="name"
                />
                <mdb-input
                  label="Brand"
                  icon="mobile"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  v-model="brand"
                />
                <mdb-input
                  label="Price"
                  icon="tag"
                  group
                  type="number"
                  validate
                  error="wrong"
                  success="right"
                  v-model="price"
                />
                <mdb-input
                  label="Image"
                  icon="image"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  v-model="image"
                />
                <mdb-input
                  label="Description"
                  icon="pencil-alt"
                  group
                  type="text"
                  validate
                  v-model="description"
                />
              </div>
              <div class="text-center">
                <mdb-btn color="cyan" type="submit">
                  Add Product
                </mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import {
  mdbInput,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbContainer,
  mdbRow,
  mdbCol,
} from 'mdbvue';
export default {
  name: 'Basic',
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      name: '',
      brand: '',
      price: '',
      image: '',
      description: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        brand: this.brand,
        price: this.price,
        image: this.image,
        description: this.description,
      };
      console.log(formData);
      axios
        .post('/products', formData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push('/products');
        })
        .catch(error => console.log(error));
    },
  },
};
</script>
