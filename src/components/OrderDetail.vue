<template>
  <b-container>
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-5 mb-3" align-h="center" style="justify-content: center; text-align: center">
          <b-col style="font-size: 25px">
            Sipariş Özetiniz
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center" class="row mt-3 mb-3">
      <b-col cols="6" v-for="productItem in myItemList" v-bind:key="productItem.id" class="item">
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
                <b-col cols="4" class="price">{{ productItem.price*productItem.amount }}₺</b-col>
                <b-col cols="4" class="name" id="quantity">Adet: {{ productItem.amount }}</b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-5 mb-3" align-h="center" style="justify-content: center; text-align: center">
          <b-col style="font-size: 25px">
            <strong>Toplam Fiyat : {{total}}₺</strong>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

</template>
<script>
import {mapGetters} from "vuex";

export default {
name: "OrderDetail",
  data() {
    return {
      total: 0,
      count: 0,
    }
    },
  computed: {
    ...mapGetters(["myItemList"]),
  },
  mounted() {
    this.myItemList.forEach((data) => {
      this.total += data.price*data.amount;
    });
    return this.total;
  },
}
</script>

<style scoped>

</style>