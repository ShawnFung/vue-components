export default {
  name: 'FxTableHeader',
  inject: ['$table'],
  props: {
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableWidth: String,
    headerRowClassName: {
      type: [String, Function],
      default: ''
    },
    headerCellClassName: {
      type: [String, Function],
      default: ''
    }
  },
  render: function (h) {
    let headerRowClass = this.getHeaderRowClass()
    return h('div', {
      class: 'fx-table--header-wrapper'
    }, [h('table', {
      class: 'fx-table--header',
      attrs: {
        cellspacing: 0,
        cellpadding: 0,
        border: 0
      },
      style: {
        width: this.tableWidth
      }
    }, [
      h('colgroup', this.columns.map((col) => {
        return h('col', {
          attrs: {
            name: col.prop,
            width: col.realWidth
          }
        })
      }).concat(h('col', {
        class: 'col-gutter'
      }))),
      h('thead', {}, [h('tr', {
        class: headerRowClass
      }, this.columns.map((col, colIndex) => {
        let cellClass = this.getHeaderCellClassName({ row: null, column: col, rowIndex: 0, columnIndex: colIndex })
        return h('th', {
          class: cellClass
        }, [col.renderHeader(h, {
          column: col,
          $index: colIndex
        })])
      }).concat(h('th', {
        class: 'gutter'
      })))])
    ])])
  },
  methods: {
    getHeaderRowClass: function () {
      let headerRowClassName = this.headerRowClassName
      if (typeof headerRowClassName === 'function') {
        headerRowClassName = headerRowClassName()
      }
      headerRowClassName = 'fx-header--row ' + headerRowClassName
      return headerRowClassName
    },
    getHeaderCellClassName: function ({ row, column, rowIndex, columnIndex }) {
      let cellClass = ['fx-header--column']
      if (column.align === 'right') {
        cellClass.push('is-right')
      } else if (column.align === 'center') {
        cellClass.push('is-center')
      }
      let headerCellClassName = this.headerCellClassName
      if (typeof headerCellClassName === 'function') {
        headerCellClassName = headerCellClassName({ row: row, column: column, rowIndex: rowIndex, columnIndex: columnIndex })
      }
      cellClass.push(headerCellClassName)
      return cellClass.join(' ')
    }
  }
}
