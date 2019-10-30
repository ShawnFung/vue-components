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
    tableTotalWidth: String
  },
  render: function (h) {
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
        width: this.tableTotalWidth
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
        class: 'fx-header--row'
      }, this.columns.map((col) => {
        return h('th', {
          class: {
            'fx-header--column': 1,
            'is-right': col.align === 'right',
            'is-center': col.align === 'center'
          }
        }, [h('span', col.label)])
      }).concat(h('th', {
        class: 'gutter'
      })))])
    ])])
  }
}
