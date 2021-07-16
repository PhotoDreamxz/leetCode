/**
 *  四数之和
 * @param {*} nums 
 * @param {*} target 
 */
var fourSum = function(nums, target) {
    if(nums.length < 4){
        return []
    }else if(nums.length === 4){
        var sum = 0
        for(var k = 0; k < nums.length;k++){
            sum += nums[k]
        }
        if(sum === target){
            return [nums]
        }else{
            return []
        }
    }
    else{
        var sumArr = []
        var set = new Set()
        var nums = nums.sort((a,b)=>{
            return a - b
        })
        for(var i = 0; i < nums.length - 3;i++){
            for(var n = i + 1;n < nums.length - 2;n++){
                var left = n + 1
                var right = nums.length - 1
                while(left !== right){
                    var sum = nums[i] + nums[n] + nums[left] + nums[right]
                    var arr = [nums[i],nums[n],nums[left],nums[right]]
                    if(sum === target){
                        var str = arr.join('')
                        if(!set.has(str)){
                            set.add(str)
                            sumArr.push(arr)
                        }
                        left++
                    }else if(sum > target){
                        right--
                    }else{
                        left++
                    }

                }
            }
        }

        return sumArr
    }
};

fourSum([-1,0,1,2,-1,-4],-1)
/**
 * 双层循环+双指针
 */