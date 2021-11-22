let str = 'aaaabbbbbbbbcccddfghijk';
function test(str) {
    let nums = 0; //统计字母个数
    let newMax = 0; //记录字母重复个数
    let Max = [];//记录字母重复的最大数
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            newMax++;
        } else {
            if (newMax > Max) {   //比较一下新纪录的个数和已经记录的最大值（第一次循环时Max = 0）
                Max = newMax + 1; //+1是因为索引值从0开始，字母个数从1开始
            } else {
                Max = Max;    //如果最大值比记录值大的话就不需要修改，这一步主要是为了严谨操作
            }
            newMax = 0   // 不论Max有没有变化，都需要从0开始记录下一个字母的重复个数
            nums++;  //记录有多少个字母的
        }
    }
    return Max>nums?Max:nums  //题目要求应该是需要一个最大数值，所以判断一下是字母个数多还是重复个数多
}
console.log(test(str))
