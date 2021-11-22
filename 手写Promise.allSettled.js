function allSettled(promises) {
    if (promises.length === 0) return Promise.resolve([])

    const _promises = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )

    return new Promise((resolve, reject) => {
        const result = []
        let unSettledPromiseCount = _promises.length

        _promises.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = {
                    status: 'fulfilled',
                    value
                }

                unSettledPromiseCount -= 1
                // resolve after all are settled
                if (unSettledPromiseCount === 0) {
                    resolve(result)
                }
            }, (reason) => {
                result[index] = {
                    status: 'rejected',
                    reason
                }

                unSettledPromiseCount -= 1
                // resolve after all are settled
                if (unSettledPromiseCount === 0) {
                    resolve(result)
                }
            })
        })
    })
}

function resolveP(value, delay) {
    return new Promise(
        resolve => setTimeout(() => resolve(value), delay)
    )
}
function rejectP(reason, delay) {
    return new Promise(
        (r, reject) => setTimeout(() => reject(reason), delay)
    )
}
async function clg() {
    const myPromiseAll = await allSettled([resolveP(['aa', 'bb'], 1000), rejectP(['cc', 'dd'], 2000)])
    console.log(myPromiseAll)
}
clg()
