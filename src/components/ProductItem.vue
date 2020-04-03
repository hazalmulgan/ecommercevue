<template>
  <b-container>
    <b-row>
      <b-col>
        <b-row class="text-center row mt-3">
          <b-col>
            <img
              v-bind:src="productItem.image"
              fluid
              alt="productItem.name"
              width="200"
              class="img"
            />
          </b-col>
        </b-row>
        <b-row class="text-center row mt-3">
          <b-col class="name">{{ productItem.name }}</b-col>
        </b-row>
        <b-row align-h="center" class="text-center row mb-3 row mt-3">
          <b-col cols="4" class="price">{{ productItem.price }}₺</b-col>
          <b-col cols="4">
            <b-button block>ADD BASKET</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productItem: {
      type: Object,
      required: false,
      default: () => ""
    }
  }
 
};
</script>

<style lang="scss">
@use 'main';

.container {
  font-family: main.$font-stack;
}

.name {
  font-size: main.$name-size;
}

.price {
  font-size: main.$price-size;
}

@media only screen and (max-width: 420px) {
  .img {
    width: 100px;
  }
}
</style>