//一些基本方法，包括类型判断，extend等
var lang   = require('./lang')
var extend = lang.extend

extend(exports, lang)

//判断浏览器环境
extend(exports, require('./env'))

//dom操作的相关
extend(exports, require('./dom'))

//处理过滤器的东东
extend(exports, require('./filter'))

//deubg
extend(exports, require('./debug'))