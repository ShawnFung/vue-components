# Vue-components

## 使用文档

### Table Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| data | 显示的数据 | array | — |	— |
| height | Table 的高度，默认为自动高度。单位 px | number |	— |	— |
| border |	是否带有纵向边框 | boolean |	— |	false |
| stripe |	是否为斑马纹table	| boolean	| —	| false |
| show-header | 是否显示表头 | boolean | — | true |
| row-class-name |	行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。|	Function({row, rowIndex})/String | —	 | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。| Function({row, rowIndex})/String	| — |	— |
| cell-class-name |	 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。	| Function({row, column, rowIndex, columnIndex})/String	 | —	| — |
| header-cell-class-name	| 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。	| Function({row, column, rowIndex, columnIndex})/String | —	| — |

### Table-column Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮 |	string |	selection/index/expand |	— | 
| index |	如果设置了 type=index，可以通过传递 index 属性来自定义索引 |	number, Function(index) | - | - |
| label| 显示的标题 | string | — | — |
| prop | 对应列内容的字段名 |	string |	— |	— |
| width |	对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列	 | string | — | — |
| fixed	| 列是否固定在左侧或者右侧 | boolean	 | left, right	| — |
 

### Table-column Scoped Slot
| name | 说明 |
| ---- | ---- |
| — | 自定义列的内容，参数为 { row, column, $index } |
|header | 自定义表头的内容. 参数为 { column, $index } |
