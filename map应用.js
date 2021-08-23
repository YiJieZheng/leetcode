const arr = ['a', 'b', 'c']
console.log(arr.map(v => {
    return { name: v }
}))
let newarr = []
for (let i = 0; i < arr.length; i++) {
    newarr.push({ name: arr[i] })
}
console.log(newarr)