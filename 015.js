/**
 * 最接近的三数之和
 * @param {*} nums 
 * @param {*} target 
 */

var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>{
        return a - b
    })
    var min = 0
    var cj = 100000000
    for(var i = 0; i < nums.length - 2;i++){
        var left = i + 1;
        var right = nums.length - 1
        while(left !== right){
            var sum = nums[i] + nums[left] + nums[right]
             if(Math.abs(sum - target) <= cj){
                if(sum - target > 0){
                    cj = Math.abs(sum - target)
                    min = sum
                    right--
                }else{
                    cj = Math.abs(sum - target)
                    min = sum
                    left++
                }
             }else{
                if(sum - target > 0){
                    right--
                }else{
                    left++
                }
             }
        }
    }
    return min
};

console.log(threeSumClosest([-1,2,1,-4],1))

/**
 * 没什么好讲解的，先排序，然后双指针
 */