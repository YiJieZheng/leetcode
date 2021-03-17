const replaceSpace = function (str) {
    const newStr = []
    // i 是新字符串的下标
    // j 是原字符串的下标
    for (let i = 0, j = 0, k = 0; j < str.length; j++) {
        if (str[j] === " ") {
            newStr[i++] = "%";
            newStr[i++] = "2";
            newStr[i++] = "0";
            console.log('i= ', i)
        } else {
            newStr[i++] = str[j];
        }
    }
    return newStr.join("");
};
console.log(replaceSpace('We Are Happy'))