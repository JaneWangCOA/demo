<template>
  <div class="hello">
    我接受到的name是{{name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props:{
    name: String,
  }
})
export default class Hello extends Vue{
  name='HelloWorld'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
