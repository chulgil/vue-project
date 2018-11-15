<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
 import TodoHeader from './components/TodoHeader.vue'
 import TodoInput from './components/TodoInput.vue'
 import TodoList from './components/TodoList.vue'
 import TodoFooter from './components/TodoFooter.vue'

//es5 기법
/*
var my_cmp = {
  template: '<div>my component</div>'
};


new Vue({
  el:'',
  components:{
    'my-cmp': my_cmp // -하이픈 케밥 기법
  }
});
*/

//es6 기법
export default{
  // 컴포넌트 태그명 : 컴포넌트 내용
  components : {
    'TodoHeader': TodoHeader,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter
    }
}

</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style:groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}

</style>
