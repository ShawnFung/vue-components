export default {
  name: 'FxTableColumn',
  inject: ['$table'],
  props: {
    label: String,
    prop: String,
    width: Number,
    minWidth: Number,
    align: String,
    type: String
  },
  created () {
    this.$table.addColumn(this)
  },
  methods: {
    renderHeader: function (h, params) {
      if (this.$scopedSlots.header) {
        return this.$scopedSlots.header(params)
      }
      return h('span', this.label)
    },
    renderCell: function (h, params) {
      let { row } = params
      if (this.$scopedSlots.default) {
        return this.$scopedSlots.default(params)
      }
      return h('span', row[this.prop])
    }
  },
  render (h) {
    return h('div', this.$slots.default)
  }
}
