// 实现`Promise.any()`
let myPromiseAny = function (promises) {
    return new Promise((resolve, reject) => {
        promises = Array.isArray(promises) ? promises : []
        let len = promises.length //传进来的数组长度
        let errs = []   //为了保存err的集合
        if (len === 0) {
            return reject(new AggregateError('All promises were rejected'))
        }
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res)
            }, err => {
                len--;
                errs.push(err)
                if (len === 0) {
                    reject(new AggregateError(errs))
                }
            })
        });
    })
}
const promises = [
    Promise.reject('ERROR A'),
    Promise.reject('ERROR B'),
    Promise.reject('ERROR C'),
]
MyPromiseany(promises).then((value) => {
    console.log('value：', value)
}).catch((err) => {
    console.log('err：', err)
    console.log(err.message)
    console.log(err.name)
    console.log(err.errors)
})


// Promise.any(promises).then((value) => {
//     console.log('value：', value)
// }).catch((err) => {
//     console.log('err：', err)
//     console.log(err.message)
//     console.log(err.name)
//     console.log(err.errors)
// })

let myPromiseAny2 = function (promises) {
    return new Promise((resolve, reject) => {
        promises = Array.isArray(promises) ? promises : []
        let len = promises.length
        let errs = []
        if (len === 0) return reject(new AggregateError('没有数组'))
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res)
            }, err => {
                len--;
                errs.push(err)
                reject(new AggregateError(errs))
            })
        })
    })
}
