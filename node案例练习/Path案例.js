const path = require('path')
//  注意：‘../’会抵消前面的路径
let pathStr = path.join('a','b/c','../','/d','e')
console.log(pathStr);