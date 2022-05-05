<template>
  <mdb-container>
    <mdb-row class="justify-content-center mt-5">
      <mdb-col md="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-1">Edit Product</p>
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
                  Edit Product
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
      id: '',
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
      axios
        .patch(`/product/${this.$route.params.id}`, formData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push(`/product/${this.$route.params.id}`);
        })
        .catch(error => console.log(error));
    },
  },

  mounted: function() {
    axios.get(`/product/${this.$route.params.id}`).then(res => {
      this.id = res.data.product.id;
      this.name = res.data.product.name;
      this.brand = res.data.product.brand;
      this.price = res.data.product.price;
      this.image = res.data.product.image;
      this.description = res.data.product.description;
    });
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>
