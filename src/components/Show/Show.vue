<template>
  <div class="mt-5 container">
    <mdb-row class="justify-content-center">
      <mdb-card
        id="card-wrapper"
        class="m-2 mx-3 justify-content-center"
        cascade
        ecommerce
      >
        <mdb-card-image id="card-wrapper" cascade top alt="" :src="image" waves />
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
              <span class="mx-2">
                ₦ {{ price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
              </span>
            </span>
          </mdb-card-title>
          <mdb-card-text>{{ description }}</mdb-card-text>
          <span class="float-right mt-1">
            <mdb-btn
              tag="a"
              @click="addToCart(product)"
              size="lg"
              class="p-1 m-0 mr-2 z-depth-0"
            >
              <mdb-icon title="Add To Cart" icon="shopping-cart" />
            </mdb-btn>
          </span>
          <div v-if="auth" class="mr-5">
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
  mdbIcon,
} from 'mdbvue';

export default {
  name: 'JumbotronPage',
  components: {
    mdbBtn,
    mdbCard,
    mdbIcon,
    mdbRow,
    mdbCardBody,
    mdbCardText,
    mdbCardImage,
    mdbCardTitle,
  },

  data() {
    return {
      product: [],
      id: '',
      name: '',
      brand: '',
      price: '',
      image: '',
      description: '',
    };
  },

  methods: {
    addToCart(item) {
      alert('Item added to cart!');
      this.$store.commit('addToCart', item);
    },

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
      this.product = res.data.product;
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
#card-wrapper {
  width: 20rem;
}
</style>
