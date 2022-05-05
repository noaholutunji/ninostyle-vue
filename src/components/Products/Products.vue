<template>
  <div>
    <mdb-container class="mt-3 text-center">
      <mdb-row>
        <mdb-col>
          <mdb-jumbotron>
            <h2 class=" display-4">Welcome to NinoStyle</h2>
            <p class="lead">
              Shop with 100% confidence
            </p>
            <hr />
            <p>
              Get any kind of fashion wears you want at affordable prices
            </p>
            <p class="lead" v-if="auth">
              <router-link to="/new">
                <mdb-btn color="primary">Add Product</mdb-btn></router-link
              >
            </p>
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col lg="3" md="6" v-for="product in products" :key="product.id">
          <mdb-card class="mb-lg-0 my-4" cascade ecommerce wide>
            <mdb-card-image cascade top alt="" :src="product.image" waves />
            <hr />
            <mdb-card-body class="text-center">
              <mdb-card-title>
                <p>
                  <strong>{{ product.name }}</strong>
                </p></mdb-card-title
              >

              <router-link :to="{ path: '/product/' + product.id }"
                ><a class="btn btn-primary mb-4">More Info</a></router-link
              >
              <mdb-col>
                <span class="float-left">
                  ₦
                  {{
                    product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                  }}
                </span>
                <span class="float-right">
                  <mdb-btn
                    tag="a"
                    @click="addToCart(product)"
                    size="lg"
                    class="p-1 m-0 mr-2 z-depth-0"
                  >
                    <mdb-icon title="Add To Cart" icon="shopping-cart" />
                  </mdb-btn>
                </span>
              </mdb-col>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import axios from 'axios';
import {
  mdbJumbotron,
  mdbBtn,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCard,
  mdbCardBody,
  mdbCardImage,
  mdbCardTitle,
  mdbIcon,
} from 'mdbvue';
export default {
  name: 'JumbotronPage',
  components: {
    mdbJumbotron,
    mdbBtn,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    mdbCardImage,
    mdbCardTitle,
    mdbIcon,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted: function() {
    axios
      .get('/products')
      .then(result => {
        console.log(result);
        this.products = result.data.products;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    addToCart(item) {
      alert('Item added to cart!');
      this.$store.commit('addToCart', item);
    },
  },
};
</script>
