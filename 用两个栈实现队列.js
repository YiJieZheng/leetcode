const zQueue = function () {
    this.stackA = []
    this.stackB = []
}
zQueue.prototype.Qpush = function (val) {
    this.stackA.push(val)
    console.log('stackA', this.stackA);
}
zQueue.prototype.Qdelete = function () {
    if (this.stackB.length) {
        console.log('进来了');
        this.stackB.pop()
    } else {
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        return this.stackB.pop() || -1
    }
}
let obj = new zQueue()
obj.Qpush(2)
obj.Qpush(3)
console.log(obj.Qdelete());