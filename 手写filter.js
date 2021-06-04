Array.prototype.myFilter = function (fn) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        return new TypeError("fn is not a Function");
    }
    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let res = arrs.myFilter((item) => {
    return item > 3
})
console.log(res)