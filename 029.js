/**
 * 下一个排列
 * 
 * @param {*} nums 
 */
var nextPermutation = function(nums) {
   if(nums.length < 2){
       return nums
   }else{
       var fast = nums.length - 2
       var slow = nums.length - 1
       var number = -1
       while(nums[fast]){
           if(nums[fast] < nums[slow]){
               number = fast
               break
           }else{
               fast--
               slow--
           }
       }
       if(number === -1){
           return nums.sort((a,b)=>{
               return a - b
           })
       }else{
           fast = nums.length - 1
           while(nums[fast]){
               if(nums[fast] > nums[number]){
                   var tem = nums[number]
                        nums[number] = nums[fast]
                        nums[fast] = tem
                        break
               }else{
                   fast--
               }
           }
           if(!nums[fast]){
            return nums.sort((a,b)=>{
                return a - b
            })
           }
       }
   }
};

/**
 * 
 */