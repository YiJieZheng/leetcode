function flatArr(arr, result) {
    arr.forEach((item, index) => {
        if (!Array.isArray(item)) {
            result.push(item)
        } else {
            flatArr(item, result)
        }
    });
    return result
}
let result = []
let arr = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]]
console.log(flatArr(arr, result))

//2.toString
console.log(arr.toString().split(',').map(i => Number(i)))

//3.ES6拓展的flat
console.log(arr.flat(Infinity))