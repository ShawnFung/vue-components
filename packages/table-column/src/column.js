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
  render (h) {
    return h('div', this.$slots.default)
  }
}
