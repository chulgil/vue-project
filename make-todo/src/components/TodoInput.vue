<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">Add</button>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem)
      // 로컬 스토리지에 저장하는 로직
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.newTodoItem = '';
    }
  }

}
</script>

<style>

</style>
