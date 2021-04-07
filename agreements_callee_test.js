function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1)
        return num * arguments.callee(num-1)
    }
}

var trueFactorial = factorial

factorial = function () { return 0; }
//arguments.callee是将指针指向了含有arguments的函数
console.log(trueFactorial(5));
console.log(factorial(5));