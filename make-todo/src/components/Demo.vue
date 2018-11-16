<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']),
    // originalPrice() {
    //   return this.$store.gettres.originalPrice;
    // },
    // doublePrice() {
    //   return this.$store.gettres.doublePrice;
    // },
    // triplePrice() {
    //   return this.$store.gettres.triplePrice;
    // },    
  }
}
</script>

<style>

</style>
