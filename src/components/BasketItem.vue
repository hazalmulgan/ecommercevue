<template>
  <b-container>
    <!--<b-row align-h="center">
      <b-col>
        <b-row class="row mt-3 text-center" align-h="center">
          <b-col cols="8" class="bucketMessage">
          <span>Your Bucket Is Empty!</span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>-->
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-3" align-h="center">
          <b-col cols="8" class="cartHeader">
            <span>MY CART()</span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-3" align-h="center">
          <b-col cols="4">
            <img
              src="https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798"
              fluid
              width="200"
              alt="productItem.name"
            />
          </b-col>
          <b-col cols="4">
            <b-row style="font-size:23px; margin-top: 1em !important">Dis Fircasi</b-row>
            <b-row
              class="text-center"
              style="margin-top: 3rem !important; font-size:25px; font-weight:bold"
            >{{price * value}}₺</b-row>
          </b-col>
        </b-row>
        <b-row class="row mt-3 mb-3" align-h="center">
          <b-col cols="4">
            <label for="sb-inline"></label>
            <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
          </b-col>
          <b-col cols="4">
            <b-button variant="outline-secondary">REMOVE</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-3" align-h="center">
          <b-col cols="4">
            <router-link to="/" name="Basket">
              <b-button block variant="outline-secondary">CONTINUE SHOPPING</b-button>
            </router-link>
          </b-col>
          <b-col cols="4">
            <b-button block>PLACE ORDER</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      price: 130
    };
  }
};
</script>

<style lang="scss">
@use 'main.scss';
.bucketMessage {
  font-size: main.$price-size;
  color:#6C757D;
  border: 1px solid #6C757D;
  padding: 10px;
  border-radius:0.25rem
}
</style>