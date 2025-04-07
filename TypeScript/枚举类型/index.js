"use strict";
//字符串枚举
var StrEnum;
(function (StrEnum) {
    StrEnum["name"] = "xiaoli";
    StrEnum["age"] = "22";
})(StrEnum || (StrEnum = {}));
console.log(0 /* Direction.up */); //其实是个对象
console.log(StrEnum); //其实是个对象
