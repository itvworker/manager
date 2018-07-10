<template lang="html">
  <el-header>
    <el-menu class="el-menu-demo" mode="horizontal">
    <ui-user></ui-user>
   </el-menu>
  </el-header>
</template>
<script>
import UiUser from './user.vue'
export default {
  components: {
    UiUser
  }
}
</script>
<style lang="less">

</style>
