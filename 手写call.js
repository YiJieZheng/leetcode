//call的实现
//第一个参数为null或undefined时，this指向全局对象window，值为原始值的自动包装对象，如：String Number Boolean
//避免函数名与上下文的属性发生冲突，使用Symbol类型作为唯一值
//将函数作为传入的上下文属性执行
//函数执行完毕后删除该属性避免传入造成污染
//返回执行结果

Function.prototype.myCall = function (content, ...args) {
    let ctx = content || window
    let func = Symbol()
    ctx[func] = this
    args = args ? args : []
    const res = args.length > 0 ? ctx[func](...args) : ctx[func]()
    return res
}

function User(name) {
    this.name = name
    this.show = function () {
        console.log(this.name)
    }
}
let obj = new User('jackson')
obj.show()
console.dir(obj.__proto__)