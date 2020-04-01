<template>
<div>
   <b-row>
      <b-col>
        <b-navbar toggleable type="light" variant="warning">
          <b-navbar-brand href="/">List</b-navbar-brand>
          <router-link to="/Basket" name='Basket'>
        <b-button size="md" variant="warning" class="mb-2">
      <b-icon icon="bucket" aria-hidden="true"></b-icon>
    </b-button>
          </router-link>
        </b-navbar>
      </b-col>
    </b-row>
  <router-view></router-view>
</div>
</template>
<script>

export default {
  name: "Home",
  // components: {
  //   ProductList
  // }
};
</script>



