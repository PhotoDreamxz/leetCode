/**
 * 搜索旋转排序数组
 * @param {*} nums 
 * @param {*} target 
 */
//简单遍历，不推荐
//  var search = function(nums, target) {
//     var key = -1
//     for(var i = 0;i < nums.length;i++){
//         if(nums[i] === target){
//             key = i
//             break
//         }
//     }
//     return key
// };
var search = function(nums, target) {
    if(nums.length === 1){
        if(nums[0] === target){
            return 0
        }else{
            return -1
        }
    }else{
       var low = 0
       var heigh = nums.length - 1


    }
    
};

function binarySearch(low,heigh){
    var mid = (low + heigh)/2
        if()
}

