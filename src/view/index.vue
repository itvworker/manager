<template>
  <section>
    <ui-menu></ui-menu>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </section>
</template>
<script>
import UiMenu from '@/view/nav'
export default{
  name: 'index',
  components: { UiMenu }

}
</script>
