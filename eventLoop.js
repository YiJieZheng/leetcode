console.log('’script start’')

async function async1() {
    await async2();
    await async3();
    console.log('async1 end');
}
async function async2() {
    console.log('async2 end');
}
async function async3() {
    console.log('async3 end');
}
async1()


setTimeout(function () {
    console.log('setTimeout');
}, 0)


new Promise(resolve => {
    console.log('promise');
    resolve()
}).then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
})


console.log('script end');