var arr = [1, 2, 3, 4, 5]
var target = 2.1;
function findMin(arr, target) {
    var index = 0;
    var old_value = Math.abs(arr[0] - target);
    var new_value;
    for (var i = 1; i < arr.length; i++) {
        new_value = Math.abs(arr[i] - target);
        if (new_value <= old_value) {
            old_value = new_value;
            index = i
        }
    }
    console.log(arr[index])
    return arr[index]
}
findMin(arr, target)