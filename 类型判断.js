let s = new String('asd')
console.log(typeof s); //object
let str = 'asd';
console.log(typeof str); //string

let arr = [[1, 2, 3], [4, 5, 6]]
console.log(typeof arr) //object
let arrs = new Array([1, 2, 3])
console.log(typeof arrs) //object


let func = function () { return true };
console.log(typeof func); //function
function func1() {
    return false
}
console.log(typeof func1)//function

let bool = false
console.log(typeof bool) //boolean

let num = 1;
console.log(typeof num) //number
let count = new Number(2)
console.log(typeof count) //object


let und = undefined
console.log(typeof und) //undefined
// console.log(und instanceof undefined)//报错 TypeError: Right-hand side of 'instanceof' is not an object
let nu = null
console.log(typeof nu) //object
// console.log(nu instanceof null)//报错 TypeError: Right-hand side of 'instanceof' is not an object


let sym = Symbol('asymbol')
console.log(typeof sym)
console.log(sym instanceof Symbol)

//手写instanceof实现
function instance_of(left, right) {
    let L = left.__proto__;
    let R = right.prototype;
    while (true) {
        if (L === null) {
            return false
        } else if (L === R) {
            return true
        } else {
            L = L.__proto__;
        }
    }
}
let a = 'asd'
console.log(instance_of(a, String))