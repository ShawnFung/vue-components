const Methods = {
  addColumn: function (column) {
    if (column.fixed === 'left') {
      this.leftColumns.push(column)
    } else if (column.fixed === 'right') {
      this.rightColumns.push(column)
    }
    this.tableFullColumn.push(column)
  },
  convertToRows: function (columns = []) {
    let result = []
    let tableColumns = []
    let maxLevel = 0
    columns.forEach(col => {
      this.updateLevel(col, col.$parent)
      if (col.level > maxLevel) {
        maxLevel = col.level
      }
    })
    columns.forEach(col => {
      let level = col.level
      let childLength = this.getChildrenLength(col)
      if (childLength === 0) {
        col.rowspan = maxLevel + 1 - col.level
        tableColumns.push(col)
      } else {
        col.colspan = childLength
      }
      if (result[level]) {
        result[level].push(col)
      } else {
        result[level] = [col]
      }
    })
    this.convertColumns = result
    this.columns = tableColumns
    if (maxLevel >= 1) {
      this.isGroup = true
    }
  },
  updateLevel: function (col, $parent) {
    if ($parent && $parent.name === 'FxTableColumn') {
      col.level += 1
      this.updateLevel(col, $parent.$parent)
    }
  },
  getChildrenLength: function (col) {
    let length = 0
    col.$children.forEach(item => {
      if (item.name === 'FxTableColumn') {
        length = length + 1
      }
    })
    return length
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
    this.tableWidth = usedTotalWidth > tableWidth ? usedTotalWidth + 'px' : ''
  },
  onTableScroll: function (event) {
    let $target = event.target
    let scrollLeft = this.scrollLeft = $target.scrollLeft
    this.isScrollLeft = scrollLeft <= 5
    this.isScrollRight = this.$el.clientWidth - scrollLeft <= 10
    if (this.$refs.tableHeader) {
      this.$refs.tableHeader.$el.scrollLeft = this.scrollLeft
    }
  },
  onMouseEnter: function ($event) {
    this.hoverRow = $event.target.dataset.index
  },
  onMouseLeave: function () {
    this.hoverRow = ''
  }
}

export default Methods
