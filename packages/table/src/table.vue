<template>
  <div class="fx-table" :class="{
    'fx-table--border': border,
    'scroll--y': overflowY,
    'scroll--x': overflowX,
  }">
    <div class="fx-table-hidden-columns"><slot></slot></div>
    <fx-table-header :columns="columns" ref="tableHeader" :tableTotalWidth="tableTotalWidth"></fx-table-header>
    <fx-table-body :data="data" :columns="columns" ref="tableBody" :tableTotalWidth="tableTotalWidth" :height="height"></fx-table-body>
  </div>
</template>

<script>
import TableHeader from './table-header'
import TableBody from './table-body'
import methods from './methods'
export default {
  name: 'FxTable',
  components: {
    'fx-table-header': TableHeader,
    'fx-table-body': TableBody
  },
  provide () {
    return {
      $table: this
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    border: Boolean,
    height: Number
  },
  data: function () {
    return {
      columns: [],
      // 是否存在纵向滚动条
      overflowY: true,
      // 是否存在横向滚动条
      overflowX: false,
      tableTotalWidth: ''
    }
  },
  mounted: function () {
    this.autoCellWidth()
  },
  methods: methods
}
</script>
