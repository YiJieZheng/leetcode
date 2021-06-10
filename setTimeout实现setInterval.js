//利用setTimeout实现setInterval，反过来能实现吗？为什么要这样做有什么优缺点吗？
function mySetInterval(fn, t) {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, t)
    }
    interval()
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}
let a = mySetInterval(() => {
    console.log('xxxx')
}, 1000)


//反向实现
function mySetTimeout(fn, t) {
    let timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, t)
}
let a = mySetTimeout(() => {
    console.log('xxxx')
}, 1000)
