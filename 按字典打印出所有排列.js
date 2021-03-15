var permutation = function (s) {
    const res = new Set()
    const isExict = {}
    function checkStr(current) {

        if (current.length === s.length) return res.add(current)
        for (let i = 0; i < s.length; i++) {
            if (isExict[i]) continue
            isExict[i] = true
            checkStr(current + s[i])
            isExict[i] = false
        }
    }
    checkStr('')
    return [...res]
};

console.log(permutation('abc'))