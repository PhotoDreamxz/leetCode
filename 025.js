/**
 * 删除有序数组中的重复项
 * @param {*} nums 
 */
 var removeDuplicates = function(nums) {
     
    if(nums.length === 1){
        return 1
    }else{
        var len = 1
        var fast = 1
        var slow = 0
            while(nums[fast] !== undefined){
                if(nums[fast] - nums[slow] === 0){
                    fast++
                }else{
                   if(fast - 1 === slow){//说明两个相隔
                        len++
                        fast++
                        slow++
                   }else if(fast - 1 > slow){//说明两个中间相隔有元素
                       len++
                       nums[slow + 1] = nums[fast]
                       slow++

                   }
                }
            }
    return len
    }
};

/**
 * 我只能说----------------------------双指针yyds
 * 就是定义双指针，然后从前到后遍历。如果两个指针指的数重复，那么就让fast继续寻找不重复的数值
 * 如果找到了，这里就需要分两种情况。第一如果fast和slow是相邻的，那么我们就不需要赋值，直接将两个指针分贝向后
 * 移动一位。如果两个指针之间有间隔，那么有一点可以确认，那就是这些处于间隙的元素一定和slow指的值是相同的，
 * 所以我们需要将此时fast指的值赋值给slow + 1，然后slow++。
 */