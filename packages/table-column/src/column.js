const forced = {
  index: {
    renderHeader: function (h, params) {
      return '#'
    },
    renderCell: function (h, params) {
      let i = params['$rowIndex'] + 1
      const index = this.index
      if (typeof index === 'number') {
        i = index
      } else if (typeof index === 'function') {
        i = index(i)
      }
      return i
    }
  }
}

export default {
  name: 'FxTableColumn',
  inject: ['$table'],
  props: {
    label: String,
    prop: String,
    width: Number,
    minWidth: Number,
    align: String,
    type: String,
    index: [Number, Function],
    fixed: String
  },
  created () {
    this.$table.addColumn(this)
  },
  methods: {
    renderHeader: function (h, params) {
      if (this.$scopedSlots.header) {
        return this.$scopedSlots.header(params)
      }
      if (this.type) {
        return forced[this.type].renderHeader.call(this, h, params)
      }
      return h('span', this.label)
    },
    renderCell: function (h, params) {
      let { row } = params
      if (this.$scopedSlots.default) {
        return this.$scopedSlots.default(params)
      }
      if (this.type) {
        return forced[this.type].renderCell.call(this, h, params)
      }
      return h('span', row[this.prop])
    }
  },
  render (h) {
    return h('div', this.$slots.default)
  }
}
