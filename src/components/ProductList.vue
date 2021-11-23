<template>
  <b-container>
    <b-row align-h="center" class="row mt-3 mb-3">
      <b-col cols="6" v-for="productItem in productList" v-bind:key="productItem.id" class="item">
        <product-item :product-item="productItem"></product-item>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import ProductItem from "@/components/ProductItem.vue";
import axios from 'axios';

export default {
  name: "ProductList",
  components: {
    ProductItem
  },

  data() {
    return {
      productList: [
        {
          currency: "TRY",
          id: 1,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321",
          name: "Şampuan",
          price: 13
        },
        {
          currency: "TRY",
          id: 2,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696",
          name: "Deodorant",
          price: 26
        },
        {
          currency: "TRY",
          id: 3,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798",
          name: "Diş Fırçası",
          price: 19
        },
        {
          currency: "TRY",
          id: 4,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321",
          name: "Pahalı Şampuan",
          price: 135
        },
        {
          currency: "TRY",
          id: 5,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696",
          name: "Lüks Deodorant",
          price: 260
        },
        {
          currency: "TRY",
          id: 6,
          image: "https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798",
          name: "Elit Diş Fırçası",
          price: 190,
        }

      ]
    };
  },

  /*mounted() {
    this.getProductList();
  },

  methods: {
    getProductList() {
      axios
          .get("https://nonchalant-fang.glitch.me/listing")
          .then(response => (this.productList = response.data));
    }
  }*/
};

</script>

<style lang="scss">
.item {
  border: 1px solid #e1e1e1;
}
</style>