/**
 * 移除元素
 * @param {*} nums 
 * @param {*} val 
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }else if(nums.length === 1){
        if(nums[0] === val){
            nums.pop()
            return 0
        }else{
            return 1
        }
    }else{
        var fast = 0
        var slow = 0
        while(nums[fast] !== undefined){
            if(nums[slow] === val){
                if(nums[fast] === val){
                    fast++
                }else{
                    nums[slow] = nums[fast]
                    nums[fast] = val
                    slow++
                    fast++
                }
            }else{
                if(slow === fast){
                    slow++
                    fast++
                }else{
                    slow++
                }
            }
        }
        return slow
    }
};

/**
 * 怎么说呢，使用的还是双指针。它的运行原理是这样的：
 * 首先fast/slow都先指向0，如果nums[slow] === val 那么就移动fast，移动fast的目的是找到第一个不为val的值
 * 然后将这个值赋值给slow指向的值。同时将fast指向的值改为val，因为用这种方式可以避免重复。当改完之后移动slow
 * 这样就保证了fast前面的所有值都不是val。即使它是重复的。
 */