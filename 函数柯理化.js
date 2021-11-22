//手写函数柯里化
function curry(sum) {
    const args = [];
    return function result(...arguments) {
        if (arguments.length === 0) {
            return sum(...args);
        }
        args.push(...arguments);
        return result;
    }
}
function sum(a, b, c) {
    return a + b + c
}
let curriedSum = curry(sum);
// console.log(curry(1)(2)(3))
console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));
