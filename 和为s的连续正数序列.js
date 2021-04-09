// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
// 示例 1：
// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：
// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

function findres(target) {
    if (target === 1) {
        return [[0, 1]];
    }
    let left = 1;
    let right = 1;
    let num = 1;
    let res = [];
    while (left <= Math.floor(target / 2)) {
        if (num < target) { right++; num += right; }
        else if (num > target) { num -= left; left++; }
        else if (num === target) {
            let arr = [];
            for (let k = left; k <= right; k++) {
                arr.push(k);
            }
            res.push(arr);
            num -= left;
            left++;
        }
    }
    return res
}

console.log(findres(9));

function findresArr(target) {
    if (target === 1) {
        return [[0, 1]];
    }
    let left = 0;
    let right = 1;
    let res = []
    while (left <= Math.floor(target / 2)) {
    let num = ((right - left + 1) * (right + left)) / 2
        if (num < target) { right++;  }
        else if (num > target) {  left++; }
        else if (num === target) {
            let arr = [];
            for (let k = left; k <= right; k++) {
                arr.push(k);
            }
            res.push(arr);
            left++;
        }
    }
    return res
}
console.log(findresArr(9));