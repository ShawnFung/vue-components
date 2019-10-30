const Methods = {
  addColumn: function (column) {
    this.columns.push(column)
  },
  autoCellWidth: function () {
    let tableEle = this.$el
    let tableWidth = tableEle.getBoundingClientRect().width
    let usedTotalWidth = 0
    let autoColList = []
    this.columns = this.columns.map(col => {
      if (col.width) {
        col.realWidth = col.width
      } else {
        col.realWidth = col.minWidth || 40
        autoColList.push(col)
      }
      usedTotalWidth += col.realWidth
      return col
    })
    if (usedTotalWidth < tableWidth && autoColList.length > 0) {
      let unUsedWidth = tableWidth - usedTotalWidth
      let autoWidthPerCol = unUsedWidth / autoColList.length
      this.columns = this.columns.map(col => {
        if (!col.width) {
          col.realWidth += autoWidthPerCol
        }
        return col
      })
    }
    this.overflowX = usedTotalWidth > tableWidth
    this.overflowY = tableEle.scrollHeight > tableEle.clientHeight
    this.tableTotalWidth = usedTotalWidth > tableWidth ? usedTotalWidth + 'px' : ''
  },
  onTableScroll: function (event) {
    let $target = event.target
    let scrollLeft = $target.scrollLeft
    this.$refs.tableHeader.$el.scrollLeft = scrollLeft
  }
}

export default Methods
