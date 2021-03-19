// const replaceSpace = function (str) {
//     const newStr = []
//     // i 是新字符串的index
//     // j 是原字符串的index
//     for (let i = 0, j = 0, k = 0; j < str.length; j++) {
//         if (str[j] === " ") {
//             newStr[i++] = "%";
//             newStr[i++] = "2";
//             newStr[i++] = "0";
//             console.log('i= ', i)
//         } else {
//             newStr[i++] = str[j];
//         }
//     }
//     return newStr.join("");
// };
// console.log(replaceSpace('We Are Happy'))

// const replaceSpace = function (str) {
//     return str = str.split(' ').join("%20");
// };
// console.log(replaceSpace('We Are Happy'))