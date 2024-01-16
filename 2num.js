const arr = [2, 7, 11, 15]
function twoNum(arr, target) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let key = target - arr[i]
        if (map.has(key)) {
            return [map.get(key), i]
        }
        map.set(arr[i], i)
    }
}
//速度更快
var twoSum = function (nums, target){
    let map = {}
    for(let i = 0;i<nums.length;i++){
        let num = nums[i]
        let key = target - num
        if(map[key] !== undefined){
            return [map[key],i]
        }else{
            map[num] = i
        }
    }
}
console.log(twoNum(arr, 9))