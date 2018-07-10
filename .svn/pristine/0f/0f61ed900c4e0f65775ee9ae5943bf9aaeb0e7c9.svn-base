<template lang="html">
 <el-main>
   <el-table
    ref="singleTable"
    :data="model"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="cover"
      label="封面" width="200">
      <template slot-scope="scope">
        <img :src="scope.row.cover" width="200" />
      </template>
    </el-table-column>
    <el-table-column
      property="title"
      label="姓名"
      width="300">

    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="del(scope.$index,scope.row.id)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000" @current-change="lose" >
</el-pagination>
<el-input v-model="sub.name" validate="name" placeholder="请输入内容"></el-input>
 </el-main>
</template>

<script>
var schema = new Schema({
  name: {
    rule: 'phone'
  }
})
export default {
  data() {
    return {
      model: [{
        id: 1,
        title: '诺贝尔经济学奖得主：美国将会输掉自己发动的贸易战1',
        cover: 'http://pic30.photophoto.cn/20140224/0005018326540429_b.jpg',
        date: '2018-05-06'
      },
      {
        id: 1,
        title: '诺贝尔经济学奖得主：美国将会输掉自己发动的贸易战2',
        cover: 'http://pic30.photophoto.cn/20140224/0005018326540429_b.jpg',
        date: '2018-05-06'
      },
      {
        id: 1,
        title: '诺贝尔经济学奖得主：美国将会输掉自己发动的贸易战3',
        cover: 'http://pic30.photophoto.cn/20140224/0005018326540429_b.jpg',
        date: '2018-05-06'
      }
      ],
      sub: {
        name: 'web'
      }
    }
  },
  methods: {
    del(index, id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.model.splice(0, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {});
    },
    lose(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="css">
</style>
