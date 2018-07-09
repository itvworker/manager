<template>
  <section>
    <ui-menu></ui-menu>
    <el-input v-model="input"  v-validate="css" placeholder="请输入内容"></el-input>
    <el-button @click="submit">按钮</el-button>
  </section>
</template>
<script>
import UiMenu from '@/view/nav';
var schema = new Schema({
  name: 'webs'
})
export default{
  name: 'index',
  components: { UiMenu },
  data() {
    return {
      input: 'web',
      css: 'style'
    }
  },
  watch: {
    input(news, olds) {
      console.log(news);
    }
  },
  methods: {
    submit() {
      
    }
  }
}
</script>
