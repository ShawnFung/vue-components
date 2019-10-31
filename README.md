# Vue-components

## 使用文档

### Table Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| data | 显示的数据 | array | — |	— |
| height | Table 的高度，默认为自动高度。单位 px | number |	— |	— |
| border |	是否带有纵向边框 | boolean |	— |	false |

### Table-column Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label| 显示的标题 | string | — | — |
| prop | 对应列内容的字段名 |	string |	— |	— |
| width |	对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列	 | string | — | — |
 

### Table-column Scoped Slot
| name | 说明 |
| ---- | ---- |
| — | 自定义列的内容，参数为 { row, column, $index } |
|header | 自定义表头的内容. 参数为 { column, $index } |
