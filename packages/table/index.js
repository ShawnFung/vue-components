import Table from './src/table.vue'

Table.install = function (Vue, options) {
  Vue.component(Table.name, Table)
}

export default Table
