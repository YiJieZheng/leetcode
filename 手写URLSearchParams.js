class myURLSearchParams {
    constructor(url) {
        this.url = url
        this.params = url.split('?')[1].split("&")
        this.obj = this.params.map(v => {
            return { key: v.split("=")[0], value: v.split("=")[1] }
        })
    }
    toString() {
        return this.url.split('?')[1]
    }
    get(name) {
        const res = []
        for (let i = 0; i < this.obj.length; i++) {
            if (name == this.obj[i].key) {
                res.push(this.obj[i].value)
            }
        }
        return res[0]
    }
    getAll(name) {
        const res = []
        for (let i = 0; i < this.obj.length; i++) {
            if (name == this.obj[i].key) {
                res.push(this.obj[i].value)
            }
        }
        return res
    }
    append(key, val) {
        this.url = `?${this.url}&${key}=${val}`
    }
    set(key, val) {
        for (let i = 0; i < this.obj.length; i++) {
            if (key == this.obj[i].key) {
                this.obj[i].value = val
            }
        }
        this.getUrl()
    }
    has(key) {
        if (this.url.indexOf(key) != -1) {
            return true
        } else {
            return false
        }
    }
    delete(key) {
        let a = 0;
        for (var i = 0; i < this.obj.length; i++) {
            if (key == this.obj[i].key) {
                this.obj.splice(i, 1)
            }
        }
        this.getUrl()
    }
    entries() {
        return this.obj.map(v => {
            return [v.key, v.value]
        })
    }
    forEach(func) {
        for (let i = 0; i < this.obj.length; i++) {
            func(this.obj[i].value, this.obj[i].key, this)
        }
    }
    keys() {
        return this.obj.map(v => {
            return v.key
        })
    }
    values() {
        return this.obj.map(v => {
            return v.value
        })
    }
    sort() {
        this.obj = this.obj.sort((a, b) => {
            if (a.key < b.key) {
                return -1
            }
            if (a.key > b.key) {
                return 1
            }
            return 0
        })
        this.getUrl()
    }
    getUrl() {
        this.url = `?${this.obj.map(v => {
            return `${v.key}=${v.value}`
        }).join('&')}`
    }
}
const method = new myURLSearchParams('?d=1&a=0.5&b=2&c=3&a=4')
// console.log(method.toString())
// console.log(method.get('a'))
// console.log(method.getAll('a'))
// method.append("e", 7)
// method.set("a", 1)
// console.log(method.toString())
// console.log(method.has("e"))
// method.delete("a")
// console.log(method.toString())
// method.entries()
// for (var pair of method.entries()) {
//     console.log(pair[0] + ', ' + pair[1]);
// }
// method.forEach((value, key, method) => {
//     console.log(value, key, method);
// })
// for (var key of method.values()) {
//     console.log(key);
// }
method.sort()