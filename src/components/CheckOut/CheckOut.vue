<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="6" class="mt-4">
        <h4 class="text-center mt-1">CHECKOUT</h4>
        <form>
          <div class="grey-text">
            <mdb-input
              label="First Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Last Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              required
            />
            <mdb-input
              label="Phone Number"
              icon="mobile"
              group
              type="number"
              validate
              error="wrong"
              success="right"
            />
            <mdb-input
              label="Shipping Address"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              required
            />

            <p class="lead mt-3 py-2 ml-5">
              <router-link to="/successfulorder">
                <mdb-btn color="primary">Confirm Order</mdb-btn>
              </router-link>
            </p>
          </div>
        </form>
      </mdb-col>
      <mdb-col md="6">
        <h4 class="text-center mt-4">Order Summary</h4>
        <mdb-card-body>
          <mdb-tbl responsive>
            <mdb-tbl-head color="mdb-color" class="lighten-5">
              <tr>
                <th>
                  <strong>Product</strong>
                </th>
                <th>
                  <strong>QTY</strong>
                </th>
                <th>
                  <strong>Amount</strong>
                </th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body v-for="item in $store.state.cart" :key="item.id">
              <tr>
                <td>
                  <h6 class="pt-2 ">
                    <strong>{{ item.name }}</strong>
                  </h6>
                </td>

                <td>
                  <h6 class="pt-2">
                    {{ item.quantity }}
                  </h6>
                </td>
                <td>
                  <h6 class="pt-2 ">
                    ₦
                    {{
                      (item.quantity * item.price)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
                    }}
                  </h6>
                </td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-card-body>
        <mdb-btn class="ml-4"> Total: ₦ {{ totalPrice }} </mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbCardBody,
  mdbBtn,
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
} from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbCardBody,
    mdbBtn,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
  },

  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.$store.state.cart) {
        total += item.totalPrice;
      }

      return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },

    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item);
    },
    increaseQuantity(item) {
      this.$store.commit('increaseQuantity', item);
    },
    decreaseQuantity(item) {
      this.$store.commit('decreaseQuantity', item);
    },
  },
};
</script>
