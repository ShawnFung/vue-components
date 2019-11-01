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
    convertColumns: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    width: function () {
      let total = 0
      this.columns.forEach(col => {
        total += col.realWidth
      })
      return total + 'px'
    }
  },
  render: function (h) {
    let {
      headerRowClassName,
      headerCellClassName
    } = this.$table
    let headerRowClass = this.getHeaderRowClass(headerRowClassName)
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
        width: this.width
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
      h('thead', {}, this.convertColumns.map(item => {
        return h('tr', {
          class: headerRowClass
        }, item.map((col, colIndex) => {
          let cellClass = this.getHeaderCellClassName(headerCellClassName, { row: null, column: col, rowIndex: 0, columnIndex: colIndex })
          return h('th', {
            class: cellClass,
            attrs: {
              colspan: col.colspan || 1,
              rowspan: col.rowspan || 1
            }
          }, [col.renderHeader(h, {
            column: col,
            $index: colIndex
          })])
        }).concat(h('th', {
          class: 'gutter',
          rowspan: this.convertColumns.length
        })))
      }))
    ])])
  },
  methods: {
    getHeaderRowClass: function (headerRowClassName) {
      if (typeof headerRowClassName === 'function') {
        headerRowClassName = headerRowClassName()
      }
      headerRowClassName = 'fx-header--row ' + headerRowClassName
      return headerRowClassName
    },
    getHeaderCellClassName: function (headerCellClassName, { row, column, rowIndex, columnIndex }) {
      let cellClass = ['fx-header--column']
      if (column.align === 'right') {
        cellClass.push('is-right')
      } else if (column.align === 'center') {
        cellClass.push('is-center')
      }
      if (typeof headerCellClassName === 'function') {
        headerCellClassName = headerCellClassName({ row: row, column: column, rowIndex: rowIndex, columnIndex: columnIndex })
      }
      cellClass.push(headerCellClassName)
      return cellClass.join(' ')
    }
  }
}
