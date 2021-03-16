let arr = [5, 6, 7, 1, 2, 3, 4]
function getMin(arr) {
    let start = 0;
    let end = arr.length - 1
    let mid = 0;
    while (true) {
        mid = (start + end) / 2 >> 0
        if (arr[mid] < arr[end]) {
            end = mid
        } else if (arr[mid] > arr[end]) {
            start = mid - 1
        } else if (arr[mid] === arr[end]) {
            end = end - 1
        }
        if (Math.abs(start - end <= 1)) {
            break;
        }
    }
    return arr[start] > arr[end] ? arr[end] : arr[start]
}
console.log(getMin(arr));