<template>
  <div>
    Board
    <div v-if="loading">loading board...</div> 

    <div>bid : {{bid}}</div>
    <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card 3</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card 4</router-link>
    <hr />
    <router-view></router-view>

  </div>
</template>

<script>

export default {

  data() {
    return {
      bid: 0,
      loading: false
    }
  },
  created() {
    this.fetchData()
    this.bid = this.$route.params.bid
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(()=> {
        this.bid = this.$route.params.bid
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style>

</style>
