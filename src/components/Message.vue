<template>
  <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">{{this.message}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    this.getMessage();
  },

  methods: {
    //type will be add, remove, submit, error(out of stock)
    getMessage(type) {
      if (type == "add") {
        this.message = "Urun sepete Eklendi";
      } else if (type == "remove") {
        this.message = "Urun cikarildi";
      } else if (type == "error") {
        this.message = "Urun Stokta bulunmamaktadir";
      } else {
        this.message = "Siparisiniz alindi";
      }
    }
  }
};
</script>

<style>
</style>