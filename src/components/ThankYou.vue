<template>
  <b-container>
    <b-row align-h="center">
      <b-col>
        <b-row class="row mt-5 mb-3" align-h="center" style="justify-content: center; text-align: center">
          <b-col style="font-size: 25px">
            Siparişiniz Alındı Teşekkürler!
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row style="justify-content: center; text-align: center">
      <b-col>
        <b-row class="row mt-3 mb-3" align-h="center">
          <b-col>
              <b-button @click="showDetail"
              >SİPARİŞ DETAYI
              </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "ThankYou",
  computed: {
    ...mapGetters(["mycartList"]),
  },
  methods: {
   showDetail(){
     this.$router.push({
       name: "OrderDetail", //use name for router push
     });
   }
  },
}
</script>

<style scoped lang="scss">
.thank-you{
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
}

</style>