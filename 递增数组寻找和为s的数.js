let arr = [1, 2, 3, 4, 5, 6, 7]
let s = 6
function findS(arr, s) {
    let left = 0;
    let right = arr.length - 1;
    while (left !== right) {
        let target = arr[left] + arr[right]
        if (target > s) right--;
        if (target < s) left++;
        if (target === s) return [arr[left], arr[right]]
    }
};
console.log(findS(arr, s));