const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
const returnMaxtimes = (arr) => {
    let count = 0;//次数
    let num = 0; //最终的值

    for (let i = 0; i < arr.length; i++) {
        if (!count) {
            count++
            num = arr[i]
        } else {
            if (num === arr[i]) {
                count++;
            } else {
                count--;
            }
        }
    }
    return num
}
console.log(returnMaxtimes(arr));

const returnMaxtimes2 = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
console.log(returnMaxtimes2(arr));