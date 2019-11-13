<template>
  <div class="container">
    <input type="text" v-model="text">
    <button @click="addTodo">
      <span>+</span></button>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Mixins} from 'vue-property-decorator';
@Component
export default class NewTodo extends Vue {
  text=''
  addTodo(){
    this.$emit('addTodo',this.text)
    this.text = ''
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 40px;
  display:inline-flex;
  align-items: center;
  justify-content: center;
}
input{
  width: 300px;
  height: 40px;
  display:inline-block;
  border:none;
  background-color: rgba(231, 231, 235,0.2);
  outline:none;
  text-indent: 1em;
  color: #8A8FFF;
  font-size: 22px;
  margin:0;
  padding:0;
}
  button{
    height: 40px;
    width: 40px;
    background-color: #F3F2FF;
    color:#8A8FFF;
    border: none;
    display:inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 4px 4px 0;
    outline: none;
  }
  span{
    font-size: 28px;
    height: 18px;
    line-height: 18px;
  }
</style>