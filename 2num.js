const arr = [2, 7, 11, 15]
function twoNum(arr, target) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let key = target - arr[i]
        if (map.has(key)) {
            return [map.get(key), i]
        }
        map.set(arr[i], i)
    }
}
console.log(twoNum(arr, 6))