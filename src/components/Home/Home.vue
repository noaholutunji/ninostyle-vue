<template>
  <div>
    <mdb-container>
      <mdb-carousel
        :interval="5000"
        slide
        :items="basicCarousel"
        v-model="carousel"
        indicators
        controlls
        class="z-depth-1 mt-4 mx-5"
      ></mdb-carousel>
    </mdb-container>
    <template>
      <mdb-container class="mt-5 px-1 text-center">
        <h3 class="mb-5">
          Latest Products
        </h3>
        <mdb-row class="mt-3">
          <mdb-col class="mt-3 ml-5">
            <img
              v-for="product in products.slice(0, 4)"
              :key="product.id"
              class="img-fluid mr-5"
              alt=""
              cascade
              top
              :src="product.image"
            />
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import { mdbCarousel, mdbContainer } from 'mdbvue';
export default {
  name: 'CarouselPage',
  components: {
    mdbCarousel,
    mdbContainer,
  },
  mounted: function() {
    axios.get('/products').then(result => {
      console.log(result);
      this.products = result.data.products;
    });
  },
  data() {
    return {
      products: [],
      carousel: 2,
      basicCarousel: [
        {
          img: true,
          src:
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/November/Hero/Fuji_Hero_Fashion_H19_en_US_1X._CB450170687_.jpg',
          mask: 'black-light',
          alt: 'First Slide',
          caption: {
            title: 'Prompt Delivery',
          },
        },
        {
          img: true,
          src:
            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/November/Hero/Desktop_12DOD_en_US_1x._CB446763963_.jpg',
          mask: 'black-strong',
          caption: {
            title: 'Excellent Customer Service',
          },
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
          mask: 'black-slight',
          caption: {
            title: 'Enjoy Shopping With Us',
          },
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg',
          mask: 'black-slight',
          caption: {
            title: 'Top Notch Experience',
          },
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg',
          mask: 'black-slight',
          caption: {
            title: 'Amazing Price Offer',
          },
        },
      ],
    };
  },
};
</script>
