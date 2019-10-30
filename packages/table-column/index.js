import TableColumn from './src/column'

TableColumn.install = function (Vue, options) {
  Vue.component(TableColumn.name, TableColumn)
}

export default TableColumn
