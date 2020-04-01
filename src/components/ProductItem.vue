<template>
  <b-container>
    <b-row>
      <b-col>
        <b-row class="text-center row mt-3">
          <b-col>
            <img v-bind:src="productItem.image" class="img" fluid alt="productItem.name" />
          </b-col>
        </b-row>
        <b-row class="text-center row mt-3">
          <b-col class="name">{{ productItem.name }}</b-col>
        </b-row>
        <b-row align-h="center" class="text-center row mb-3 row mt-3">
          <b-col cols="4" class="price">{{ productItem.price }} {{ productItem.currency }}</b-col>
          <b-col cols="4">
            <b-button variant="warning">ADD BASKET</b-button>
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
  },
};
</script>

<style>
.img {
  width: 200px;
}

</style>