//es6导入和导出成员的方式
//导入: import name from 'modulefile'
//导出: export 或 export default
// export 导出的变量,在import时不能更改名称,而export default则可以再命名

export var name = 'wang'

export default{
    age: 10,
    grade:1
}




//在Node中导入和导出成员的方式
//导入 var name = require('modulefile')
//导出: exports 或 module.exports