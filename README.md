# Vue-components

已实现功能：
- [ ] 自定义列的内容
- [ ] 自定义表头的内容

## 使用文档

### Table-column Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
 - | :-: | :-: | :-: | :-: |
 label| 显示的标题 | string | — | —
 

### Table-column Scoped Slot
name | 说明
 - | :-:
 — | 自定义列的内容，参数为 { row, column, $index }
 header | 自定义表头的内容. 参数为 { column, $index }
