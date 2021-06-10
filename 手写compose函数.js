// 用法如下:
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}

function compose(...fns) {
    if (fns.length === 0) {
        return (v) => v
    } else if (fns.length === 1) {
        return fns[0]
    } else {
        return fns.reduce((pre, cur) => (...args) => pre(cur(...args)))
    }
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

//通过reduce实现fn合并
//arr.reduce(callback,[initialValue])
//reduce接收一个callback作为参数，callback函数可以接收四个参数
//  1、previousValue（上一次调用回调返回的值，或者提供的初始值[initialValue]）
//  2、currentValue（数组中当前被处理的项）
//  3、index（当前项的索引）
//  4、array（调用reduce的数组）