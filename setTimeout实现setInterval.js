//setInterval ( code, milliseconds[, args...] )
function interval(func, time, params) {
    let ctx, args, timer;
    ctx = this;
    args = params
    func.call(ctx, args)
    timer = setTimeout(function () {
        interval(func, time, params)
        clearTimeout(timer)
    }, time);
}
let func = function (num) {
    console.log(num)
}
interval(func, 1000, 5)