const zQueue = function () {
    let stackA = []    //不用this.stackA = [],是为了不暴露到外部遭到修改
    let stackB = []
}
zQueue.prototype.Qpush = function (val) {
    stackA.push(val)
    console.log('stackA', stackA);
}
zQueue.prototype.Qdelete = function () {
    if (stackB.length) {
        console.log('进来了');
        stackB.pop()
    } else {
        while (stackA.length) {
            stackB.push(stackA.pop());
        }
        return this.stackB.pop() || -1
    }
}
let obj = new zQueue()
obj.Qpush(2)
obj.Qpush(3)
console.log(obj.Qdelete());