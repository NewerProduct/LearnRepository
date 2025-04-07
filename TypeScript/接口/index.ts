interface Student {
    name:string,
    age:number
}

//写一个接口来继承学生接口
interface Grade extends Student {
    grade:string
}

const s1:Grade = {
    name:'张三',
    age:20,
    grade:'一班'
}   

interface PersonInterface {
    name:string,
    age:number
}
//还可以再次定义一个同名接口
interface PersonInterface {
    gender:string
}