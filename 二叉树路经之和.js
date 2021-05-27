
var root = {
    val: '1',
    left: {
        val: '1',
        left: {
            val: '1'
        },
        right: {
            val: '3'
        }
    },
    right: {
        val: '2',
        left: {
            val: '4'
        },
        right: {
            val: '5'
        }
    }
}
function sumTree(root, sum = 0) {
    if (!root) {
        return 0;
    }
    sum = sum * 10 + root.val;
    if (!root.left && !root.right) {
        return sum;
    }
    return sumTree(root.left, sum) + sumTree(root.right, sum);
}
console.log(sumTree(root, sum = 0))