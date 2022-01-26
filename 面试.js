//=======================手写typeof==============================
//typeof和instance of的区别？
//typeof只能判断基本类型：undefined、null、boolean、symbol、number、string、bigint。还能判断function和object（null）
// 原理：取判断类型的二进制数的前三位｜前一位（也就是最后三位｜最后一位）进行比较
// 000:对象
// 010:浮点数
// 100:字符串
// 110:布尔
// 1:整数
// Array：1000100010001000
//  null：0000000000000000
function myTypeof(params) {
    const type = Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
    const map = {
        'number': true,
        'string': true,
        'boolean': true,
        'undefined': true,
        'bigint': true,
        'symbol': true,
        'function': true
    }
    return map[type] ? type : 'Object'
}
// console.log(myTypeof(undefined));
//==================手写instance of==============================
//instanceof原理：构造函数.prototype === 实例化对象.__proto__
function myInstanceOf(L, R) {
    if (typeof L !== 'object' || !L) return false;
    const structure = L.__proto__
    if (structure !== R.prototype) {
        return myInstanceOf(structure, R)
    } else {
        return true
    }
};
console.log(myInstanceOf(new String(''), String));

//～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
//深拷贝和浅拷贝？赋值是浅拷贝吗？
//浅拷贝: 重新在堆中创建内存，拷贝的基本数据类型互不影响，但拷贝的引用类型因为公用一块内存所以互相影响。
//深拷贝: 从目标对象的内存地址中完整的拷贝一份出来，存放在堆内存中新开辟的空间。彼此并不互相影响。
//赋 值 :当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。
//   也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，
//   因此，两个对象是联动的 
//      -----------------------------
//     ｜   栈   ｜       堆         ｜
//     ｜       ｜                  ｜
//     ｜       ｜                  ｜
//     ｜       ｜                  ｜
//     ｜       ｜                  ｜
let obj = {
    name: 'Jackson',
    arr: [1, 2, 3, 4]
}
//===================赋值======================
// let obj1 = obj
// obj1.name = '这是赋值'
// obj1.arr[0] = 0
// console.log('obj', obj); //obj { name: '这是赋值', arr: [ 0, 2, 3, 4 ] }
// console.log('obj1', obj1); //obj1 { name: '这是赋值', arr: [ 0, 2, 3, 4 ] }
//==================浅拷贝======================
// let obj2 = shallowClone(obj);
// obj2.name = "这是浅拷贝"
// obj2.arr[0] = 0
// function shallowClone(source) {
//     var target = {};
//     for (const i in source) {
//         if (source.hasOwnProperty(i)) {
//             target[i] = source[i]
//         }
//     }
//     return target
// }
// console.log('obj', obj); // obj { name: 'Jackson', arr: [ 0, 2, 3, 4 ] }
// console.log('obj2', obj2);// obj2 { name: '这是浅拷贝', arr: [ 0, 2, 3, 4 ] }
//==================深拷贝======================
// let obj3 = deepClone(obj)
// obj3.name = "深拷贝"
// obj3.arr[0] = 0
// function deepClone(obj) {
//     if (obj === null) return obj;
//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof RegExp) return new RegExp(obj);
//     if (typeof obj !== 'object') return obj;
//     let deepCloneObj = new obj.constructor();
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             deepCloneObj[key] = deepClone(obj[key])
//         }
//     }
//     return deepCloneObj;
// }
// console.log('obj', obj); // obj { name: 'Jackson', arr: [ 1, 2, 3, 4 ] }
// console.log('obj3', obj3);// obj3 { name: '深拷贝', arr: [ 0, 2, 3, 4 ] }