<template>
  <b-container>
    <div v-if="mycartList.length == 0">
      <b-row align-h="center">
        <b-col>
          <b-row class="row mt-3 text-center" align-h="center">
            <b-col cols="8" class="bucketMessage">
              <span>Your Bucket Is Empty!</span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <div v-if="mycartList.length > 0">
      <b-row align-h="center">
        <b-col>
          <b-row class="row mt-3 cartHeader" align-h="center">
            <b-col cols="8">
              <span>MY CART({{mycartList.length}})</span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row
        align-h="center"
        class="row mt-3 mb-3"
        v-for="basketItem in mycartList"
        v-bind:key="basketItem.id"
      >
    <basket-item :basket-item="basketItem">
    </basket-item>
      </b-row>
      </div>
      <b-row align-h="center">
        <b-col>
          <b-row class="row mt-3 mb-3" align-h="center">
            <b-col cols="4">
              <router-link to="/" name="Basket">
                <b-button block variant="outline-secondary">CONTINUE SHOPPING</b-button>
              </router-link>
            </b-col>
            <b-col cols="4">
              <b-button :disabled="mycartList.length == 0 ? true : false" block @click="submitOrder()" >PLACE ORDER</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "@/components/BasketItem.vue";

export default {
  components:{
    BasketItem
  },
  
  computed: {
    ...mapGetters(["mycartList"])
  },

  data() {
    return {
      value: BasketItem.amount
    };
  },
  
  methods: {
    submitOrder() {

console.log(mycartList)}
  }
};
</script>

<style lang="scss">
@use 'main.scss';

.basketName {
  font-size: main.$basket-name;
  margin-top: 1em !important;
}
.basketPrice {
  font-size: main.$basket-price;
  margin-top: 3rem !important;
  font-weight: bold;
}
.cartHeader {
  font-size: main.$list-price !important;
}
.bucketMessage {
  font-size: main.$list-price;
  color: #6c757d;
  border: 1px solid #6c757d;
  padding: 10px;
  border-radius: 0.25rem;
}
</style>