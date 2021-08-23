//合并k个升序链表
const lists = [[1, 4, 5], [1, 3, 4], [4, 5, 6]]
var mergeKLists = function (lists) {
    let arr = lists.reduce((p, n) => {
        while (n) {
            p.push(n), n = n.next
        }
        return p
    }, [])
        .sort((a, b) => a.val - b.val)
        .reduceRight((p, n) => (n.next = p, p = n, p), null)
    console.log('arr', arr)
};
mergeKLists(lists)