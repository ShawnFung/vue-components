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
    height: Number,
    tableTotalWidth: String
  },
  render: function (h) {
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
        h('tbody', {}, this.data.map((item) => {
          return h('tr', {}, this.columns.map(col => {
            return h('td', {
              class: {
                'fx-body--column': 1,
                'is-right': col.align === 'right',
                'is-center': col.align === 'center'
              }
            }, [
              h('span', item[col.prop])
            ])
          }))
        }))
      ])
    ])
  },
  methods: {
    scroll: function () {
      console.log('scroll')
    }
  }
}
