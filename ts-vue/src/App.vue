<template>
  <div id="app">
    <NewTodo @addTodo='addTodo'></NewTodo>
    <TodoList :list="list" @updateTodo="updateTodo"></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Watch } from 'vue-property-decorator';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
import Todo from './models/Todo'



@Component({
  components:{
    NewTodo,TodoList
  },
  watch:{
    list(newValue:Array<Todo>){
      console.log(newValue)
      let string = JSON.stringify(newValue)
      localStorage.setItem('data',string)
    }
  }
})
export default class App extends Vue {
  list:Array<Todo>= JSON.parse(localStorage.getItem('data')||"[]")
  addTodo(name:String){
    const newList:Todo = {name:name,status:'todo'}
    this.list.push(newList)
  }
  updateTodo(todo:Todo,part:Partial<Todo>){
    let index:number = this.list.indexOf(todo)
    let newTodo:Todo = Object.assign({},todo,part)
    this.list.splice(index,1,newTodo)
  }
}
</script>

<style lang="scss">
#app {
  padding: 40px 30px 40px 30px;
  background-color: #FFFFFF;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  color: #8A8FFF;
}
</style>

<style lang="scss">
  *{
    margin:0;
    padding:0;
  }
  ul,li,ol{
    list-style: none;
  }
</style>
