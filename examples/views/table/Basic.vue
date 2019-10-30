<template>
  <div class="table-basic">
    <fx-table :data="userList" :border="true">
      <fx-table-column label="姓名" prop="name" align="center" :min-width="200">
        <template slot-scope="scope">
          My Name is {{scope.row.name}}
        </template>
      </fx-table-column>
      <fx-table-column label="年龄" prop="age" :min-width="200"></fx-table-column>
      <fx-table-column label="地址" prop="address" :min-width="200"></fx-table-column>
    </fx-table>
  </div>
</template>

<script>
export default {
  name: 'TableBasic',
  data: function () {
    return {
      userList: [
        { name: '张三', age: 12, address: '华晨世纪广场' },
        { name: '李四', age: 15, address: '北京天安门' },
        { name: '王五', age: 33 },
        { name: '张三', age: 12, address: '华晨世纪广场' },
        { name: '李四', age: 15, address: '北京天安门' }
      ]
    }
  }
}
</script>

<style lang="less">
  .table-basic{
    width: 500px;
  }
</style>
