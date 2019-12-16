<template>
  <div class="container my-5 justify-content-center">
    <mdb-col>
      <mdb-card class="w-50">
        <mdb-card-body class="text-center">
          <h4>Order Successful</h4>
          <a href="/products">Continue Shopping</a>
        </mdb-card-body>
      </mdb-card>
    </mdb-col>
  </div>
</template>

<script>
import { mdbCard, mdbCol, mdbCardBody } from 'mdbvue';
export default {
  components: {
    mdbCard,
    mdbCol,
    mdbCardBody,
  },
};
</script>
