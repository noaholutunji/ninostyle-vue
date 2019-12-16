<template>
  <div class="mt-5 container">
    <mdb-row class="justify-content-center">
      <mdb-card
        id="style"
        class="m-2 mx-3 justify-content-center"
        cascade
        ecommerce
      >
        <mdb-card-image id="style" cascade top alt="" :src="image" waves />
        <mdb-card-body cascade class="text-center">
          <mdb-card-title tag="h5">
            <strong>Name: </strong>
            {{ name }}
          </mdb-card-title>
          <mdb-card-title tag="h5">
            <strong>Brand: </strong>
            {{ brand }}
          </mdb-card-title>
          <mdb-card-title>
            <span class="float-left">
              <span class="discount mx-2">
                ₦ {{ price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
              </span>
            </span>
          </mdb-card-title>
          <mdb-card-text>{{ description }}</mdb-card-text>
          <div v-if="auth">
            <router-link :to="{ path: '/edit/' + id }"
              ><a class="btn btn-primary btn-sm">Edit</a></router-link
            >

            <mdb-btn @click="deleted" color="danger btn-sm">
              Delete
            </mdb-btn>
          </div>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
  </div>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import {
  mdbBtn,
  mdbRow,
  mdbCardBody,
  mdbCard,
  mdbCardImage,
  mdbCardTitle,
  mdbCardText,
  mdbTooltip,
} from 'mdbvue';
export default {
  name: 'JumbotronPage',
  components: {
    mdbBtn,
    mdbCard,
    mdbRow,
    mdbCardBody,
    mdbCardText,
    mdbCardImage,
    mdbCardTitle,
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
    deleted() {
      axios
        .delete(`/product/${this.$route.params.id}`, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push('/products');
        })
        .catch(err => console.log(err));
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

<style scoped>
#style {
  width: 20rem;
}
</style>
