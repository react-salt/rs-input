# React Salt - Input

基础表单组件，包含了input\textarea\radio\checkbox

可以单独使用，也可以配合FormControl，需要从外界获取value值，在更新后会对外输出。

input[type="text"]支持通过mySize属性调整大小

Props属性如下

| props | 说明 | 类型 | 默认值 | 备选 |
|:------------- |:---------------:| -------------:| -------------:| -------------:|
| mySize | 大小 | string | normal | large\normal\small |
| className | 自定义类名 | string | ‘’ |  |
| value | 值 | number/string/array | null | |
| onChange | 值更新回调函数 | function | null | null |

