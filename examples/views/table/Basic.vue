<template>
  <div class="table-basic">
    <fx-table :data="userList" :border="true" :header-row-class-name="headerRowClass" :row-class-name="rowClass" :header-cell-class-name="headerCellClassName" :cell-class-name="cellClassName">
      <fx-table-column type="index" :index="getRowIndex" :width="80" fixed="left">
        <template slot="header">
          序号
        </template>
      </fx-table-column>
      <fx-table-column label="姓名" prop="name" align="center" :min-width="200">
        <template slot="header" slot-scope="scope">
          请问你的{{scope.column.label}}是什么?
        </template>
        <template slot-scope="scope">
          我的{{scope.column.label}}是{{scope.row.name}}
        </template>
      </fx-table-column>
      <fx-table-column label="年龄" prop="age" :min-width="200"></fx-table-column>
      <fx-table-column label="学校" prop="school" :min-width="200"></fx-table-column>
      <fx-table-column label="专业" prop="profession" :min-width="200"></fx-table-column>
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
        { name: '张三', age: 12, address: '华晨世纪广场', school: '北大', profession: '刑侦专业' },
        { name: '李四', age: 15, address: '北京天安门', school: '南大', profession: '经济专业' },
        { name: '王五', age: 33, school: '清华', profession: '土木工程' },
        { name: '张三', age: 12, address: '华晨世纪广场', school: '电大', profession: '生物学研究' },
        { name: '李四', age: 15, address: '北京天安门', school: '哈工大', profession: '武器制造' }
      ]
    }
  },
  methods: {
    getRowIndex: function (index) {
      return `第${index}列`
    },
    headerRowClass: function () {
      return 'custom-header'
    },
    rowClass: function ({ row, rowIndex }) {
      return 'row-' + rowIndex
    },
    headerCellClassName: function ({ row, column, rowIndex, columnIndex }) {
      return `row-${rowIndex}-col-${columnIndex}`
    },
    cellClassName: function ({ row, column, rowIndex, columnIndex }) {
      return `row-${rowIndex}-col-${columnIndex}`
    }
  }
}
</script>

<style lang="less">
  .table-basic{
    width: 500px;
  }
</style>
