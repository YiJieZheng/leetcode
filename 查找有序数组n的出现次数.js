
//方法一   找最右侧和最左侧的索引值
function getUpper(arr, key) {
    //获取某个元素最后出现位置 
    var low = 0, high = arr.length - 1;
    var mid = Math.round((low + high) / 2);
    /*其实是一个递归迭代*/
    while (low <= high) {

        if (arr[mid] <= key) {
            //当要查找的值比中位数大于等于时，把查找的低位限制为mid+1
            low = mid + 1;
        } else {
            //当要找的值比 中位数小时，把查找的高位限制为mid-1 
            high = mid - 1;
        }
        mid = Math.round((low + high) / 2);

    }
    // 返回最后出现位置 
    return high;
}
function getLower(arr, key) {//获取某个元素第一次出现位置 
    var low = 0, high = arr.length - 1;
    var mid = Math.round((low + high) / 2);
    while (low <= high) {
        //当要找的值比 中位数小于等于时，把查找的高位限制为mid+1 
        if (arr[mid] >= key) {
            high = mid - 1;
        } else {
            //当要找的值比 中位数大时，，把查找的低位限制为mid+1 
            low = mid + 1;
        }
        mid = Math.round((low + high) / 2);
    }
    //返回第一次出现位置 
    return low;
}

var arr = [0, 1, 1, 2, 2, 2, 2, 4, 4, 4]; //测试数组 
var key = 4;
var higher = getUpper(arr, key);
var lower = getLower(arr, key);
console.log("方法一=======" + (higher - lower + 1));


// 方法二  找到值之后左右寻找
function getTarget(arr, target) {
    let mid = 0;   ///二分查找的中间值
    let right = arr.length - 1; //最右侧的指针位置
    let rightIndex = null;      //找到目标值后要向右移动的指针
    let rightBreak = false;     //结束向右寻找的条件
    let left = 0;               //最左侧的指针位置
    let leftIndex = null;       //找到目标值后要向左移动的指针
    let leftBreak = false;      //结束向左寻找的条件

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] == target) {
            leftIndex = rightIndex = mid
            while (arr[leftIndex] == target || arr[rightIndex] == target) {
                if (arr[leftIndex] == arr[leftIndex - 1]) {
                    leftIndex--;
                } else {
                    leftBreak = true;
                }
                if (arr[rightIndex] == arr[rightIndex + 1]) {
                    rightIndex++;
                } else {
                    rightBreak = true;
                }

                if (leftBreak && rightBreak) {
                    return (rightIndex - leftIndex) + 1
                }
            }

        } else {
            return 'undefine'
        }
    }
}
console.log("方法二===" + getTarget(arr, 4))

//方法三  直接找到目标值的索引值

function getTargetLength(arr, target) {
    return arr.filter(val => val == target).length
}
console.log("方法三===" + getTargetLength(arr, 4))