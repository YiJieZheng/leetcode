//从扑克牌中随机抽取五张，判断是不是顺子    A是1 JQK是11，12，13 大小王为0可代替任意一张牌
//解题思路
//1排序
//2去掉0
//3判断有没有对子（即使有一对也不是顺子）
let arr = [0, 2, 3, 4, 6]
function getshunzi(arr) {
    const newarr = arr.sort(function (a, b) {
        return a - b;
    })
    const noZero = newarr.filter(v => { return v !== 0 })
    let Dval = 0  //需要几个0
    const zeroNum = newarr.length - noZero.length //0的个数
    for (let i = 0; i < noZero.length - 1; i++) {
        if ((noZero[i + 1] - noZero[i]) > 1) {
            Dval = Dval + noZero[i + 1] - noZero[i] - 1;
        }
        else if (noZero[i + 1] - noZero[i] === 0) {
            return false;
        }
        if (Dval > zeroNum) {
            return false;
        }

    }
    return true;
}
console.log(getshunzi(arr))