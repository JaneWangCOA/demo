<template>
  <div>
    <ol>
      <li v-for="(todoItem,index) in list" :key="index">
        {{todoItem.name}}
        <input
          class="checkbox"
          type="checkbox"
          @change="changeStatus(todoItem,$event)"
          :checked="todoItem.status==='done'"
        />
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "../models/Todo";
@Component({
  props: {
    list: Array
  }
})
export default class TodoList extends Vue {
  changeStatus(todoItem: Todo, e: Event) {
    let checked = (<HTMLInputElement>e.target).checked;
    this.$emit("updateTodo", todoItem, { status: checked ? "done" : "todo" });
  }
}
</script>

<style lang="scss" scoped>
ol {
  margin-top: 30px;
  width: 280px;
  padding-left: 20px;
}
li {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkbox {
  appearance: none;
  outline: none;
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: rgba(#8a8fff, 0.8);
  position: relative;
  cursor: pointer;
  &:checked:after {
    content: "\2713";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
}
</style>