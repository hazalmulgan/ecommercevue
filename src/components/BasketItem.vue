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
          <b-row class="row mt-3" align-h="center">
            <b-col cols="8" class="cartHeader">
              <span>MY CART({{mycartList.length}})</span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" v-for="basketItem in mycartList" v-bind:key="basketItem.id">
        <b-col>
          <b-row class="row mt-3" align-h="center">
            <b-col cols="4">
              <img v-bind:src="basketItem.image" fluid width="200" alt="basketItem.name" />
            </b-col>
            <b-col cols="4">
              <b-row style="font-size:23px; margin-top: 1em !important">{{basketItem.name}}</b-row>
              <b-row
                class="text-center"
                style="margin-top: 3rem !important; font-size:25px; font-weight:bold"
              >{{basketItem.price}}₺</b-row>
            </b-col>
          </b-row>
          <b-row class="row mt-3 mb-3" align-h="center">
            <b-col cols="4">
              <label for="sb-inline"></label>
              <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
            </b-col>
            <b-col cols="4">
              <b-button variant="outline-secondary" @click="removeItem(basketItem)">REMOVE</b-button>
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
              <b-button block @click="submitOrder()">PLACE ORDER</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["mycartList"])
  },    

data(){
  return {
    value:50
  }
},
  methods: {
    ...mapMutations(["DELETE_FROM_CART"]),
    removeItem(basketItem) {
      this.DELETE_FROM_CART(basketItem);
      console.log(basketItem);
    },
    submitOrder() {
      console.log(this.orderedItems);
    }
  }
};
</script>

<style lang="scss">
@use 'main.scss';
.bucketMessage {
  font-size: main.$price-size;
  color: #6c757d;
  border: 1px solid #6c757d;
  padding: 10px;
  border-radius: 0.25rem;
}
</style>