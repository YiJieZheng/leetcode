// 学校在拍年度纪念照时，一般要求学生按照非递减的高度顺序排列请你返回能让所有学生以非递减高度排列的最小必要移动人数。
//原数组   [1,1,2,4,3]
//目标数组 [1,1,2,3,4] 
//输出   2
let arr = [1, 1, 2, 4, 3]
function findcCount (arr) {
    let oldarr = [...arr]
    let newarr = arr.sort((a, b) => a - b)
    let count = 0
    newarr.map((v, i) => {
        (v != oldarr[i]) ? count++ : count
    })
    return count
}
console.log(findcCount(arr));