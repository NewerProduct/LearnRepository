//数字枚举
const enum Direction {
    up,
    down,
    left,
    right
}

//字符串枚举
enum StrEnum {
    name='xiaoli',
    age='22'
}
console.log(Direction.up); //其实是个对象
console.log(StrEnum); //其实是个对象
