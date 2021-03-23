//查询0-n-1数组中缺失的数，升序数组
//1.判断头尾是否缺失
//2.二分法查找如果中间值不缺失说明缺失的数在mid右边，相反在左边
//3.判断第一个数是否缺失
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]
function getNum(arr) {
    let l = 0;
    let r = arr.length - 1
    let mid;
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (arr[l] !== l) {
            return l
        }
        arr[mid] === mid ? l = mid + 1 : r = mid - 1
    }
    return l
}
console.log(getNum(arr))