const str = 'abcabca';
function getMaxLength(str) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            arr.push(str[i])
            max = max > arr.length ? max : arr.length
        } else {
            arr = arr.slice(arr.indexOf(str[i]) + 1)
            arr.push(str[i])
        }
    }
    return max
}
console.log(getMaxLength(str));