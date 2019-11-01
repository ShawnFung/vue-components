export default {
  name: 'FxTableBody',
  inject: ['$table'],
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    height: Number
  },
  data: function () {
    return {}
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
      rowClassName,
      cellClassName
    } = this.$table
    return h('div', {
      class: 'fx-table--body-wrapper',
      style: {
        height: this.height + 'px'
      },
      on: {
        scroll: this.$table.onTableScroll
      }
    }, [
      h('table', {
        class: 'fx-table--body',
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
        h('tbody', {}, this.data.map((item, rowIndex) => {
          let rowClass = this.getRowClassName(rowClassName, { row: item, rowIndex: rowIndex })
          return h('tr', {
            class: rowClass,
            attrs: {
              'data-index': rowIndex
            },
            on: {
              mouseenter: this.$table.onMouseEnter,
              mouseleave: this.$table.onMouseLeave
            }
          }, this.columns.map((col, colIndex) => {
            let cellClass = this.getCellClassName(cellClassName, { row: item, column: col, rowIndex: rowIndex, columnIndex: colIndex })
            return h('td', {
              class: cellClass
            }, [col.renderCell(h, {
              row: item,
              column: col,
              $colIndex: colIndex,
              $rowIndex: rowIndex
            })])
          }))
        }))
      ])
    ])
  },
  methods: {
    getRowClassName: function (rowClassName, params) {
      if (typeof rowClassName === 'function') {
        rowClassName = rowClassName(params)
      }
      rowClassName = 'fx-body--row ' + rowClassName
      return rowClassName
    },
    getCellClassName: function (cellClassName, { row, column, rowIndex, columnIndex }) {
      let cellClass = ['fx-body--column']
      if (column.align === 'right') {
        cellClass.push('is-right')
      } else if (column.align === 'center') {
        cellClass.push('is-center')
      }
      if (typeof cellClassName === 'function') {
        cellClassName = cellClassName({ row: row, column: column, rowIndex: rowIndex, columnIndex: columnIndex })
      }
      cellClass.push(cellClassName)
      return cellClass.join(' ')
    }
  }
}
