<template>
  <div class="fx-table" :class="{
    'fx-table--border': border || isGroup,
    'fx-table--stripe': stripe,
    'scroll--y': overflowY,
    'scroll--x': overflowX,
    'is-scrolling-left': isScrollLeft,
    'is-scrolling-right': isScrollRight
  }">
    <div class="fx-table-hidden-columns"><slot></slot></div>
    <fx-table-header
      v-if="showHeader"
      :columns="columns"
      :convertColumns="convertColumns"
      ref="tableHeader"></fx-table-header>
    <fx-table-body
      :data="data"
      :columns="columns"
      ref="tableBody"
      :height="height"></fx-table-body>
    <div class="fx-table__fixed" v-if="leftColumns.length > 0">
      <fx-table-header
        v-if="showHeader"
        :data="data"
        :columns="leftColumns"
        :convertColumns="convertColumns"
      ></fx-table-header>
      <fx-table-body
        ref="leftTableBody"
        :data="data"
        :columns="leftColumns"
        :height="height"></fx-table-body>
    </div>
    <div class="fx-table__fixed-right" v-if="rightColumns.length > 0">
      <fx-table-header
        v-if="showHeader"
        :data="data"
        :columns="rightColumns"
        :convertColumns="convertColumns"
      ></fx-table-header>
      <fx-table-body
        ref="rightTableBody"
        :data="data"
        :columns="rightColumns"
        :height="height"></fx-table-body>
    </div>
  </div>
</template>

<script>
import TableHeader from './table-header'
import TableBody from './table-body'
import methods from './methods'
import { addClass, removeClass } from '../../../src/utils/dom'
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
    height: Number,
    stripe: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    },
    rowClassName: {
      type: [String, Function],
      default: ''
    },
    headerRowClassName: {
      type: [String, Function],
      default: ''
    },
    cellClassName: {
      type: [String, Function],
      default: ''
    },
    headerCellClassName: {
      type: [String, Function],
      default: ''
    }
  },
  data: function () {
    return {
      tableFullColumn: [],
      columns: [],
      convertColumns: [],
      leftColumns: [],
      rightColumns: [],
      // 是否存在纵向滚动条
      overflowY: true,
      // 是否存在横向滚动条
      overflowX: false,
      scrollLeft: 0,
      isScrollLeft: true,
      isScrollRight: false,
      hoverRow: '',
      isGroup: false
    }
  },
  watch: {
    hoverRow: function (rowIndex) {
      let $hoverRow = this.$el.querySelectorAll('.hover-row')
      $hoverRow.forEach($item => {
        removeClass($item, 'hover-row')
      })
      if (rowIndex >= 0) {
        addClass(this.$refs.tableBody.$el.querySelectorAll('.fx-body--row')[rowIndex], 'hover-row')
        this.$refs.leftTableBody && addClass(this.$refs.leftTableBody.$el.querySelectorAll('.fx-body--row')[rowIndex], 'hover-row')
        this.$refs.rightTableBody && addClass(this.$refs.rightTableBody.$el.querySelectorAll('.fx-body--row')[rowIndex], 'hover-row')
      }
    }
  },
  mounted: function () {
    this.convertToRows(this.tableFullColumn)
    this.autoCellWidth()
  },
  methods: methods
}
</script>
