//使用promise  async await，让setTimeout优先输出
// setTimeout(() => {
//     console.log('success!');
// })

// console.log('end');

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(() => {
                console.log('success!');
            })
        })
    })
}
async function fn1() {
    let p = await fn()
    p()
    console.log('end');
}
fn1()