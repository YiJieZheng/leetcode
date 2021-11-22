var arr = [1, 1, 0, 2, 3, 4, 3, 4, 5, 6, 1, 2, 3]
function getMaxNum(arr) {
    let target = []
    let max = []
    let newMax = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == 1) {
            target.length == 0 ? target.push(arr[i], arr[i + 1]) : target.push(arr[i + 1])
        } else {
            newMax = target.reduce((a, b) => { return a + b }, 0)
            max.length == 0 ? max = newMax : max > newMax ? max : max = newMax
            target = []
        }
    }
    return max
}
getMaxNum(arr) //18