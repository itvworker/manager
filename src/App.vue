<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      radio: '1',
      input: 'wwww'
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .webstore{
    width: 200px;
    height: 200px;
    background-color: #bbb;
  }
}
</style>
