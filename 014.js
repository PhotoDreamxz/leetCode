

// var threeSum = function(nums) {//这种方式可行，但是时间太长，不建议使用
//     var res = []
//     var set = new Set()
//     nums = nums.sort((a,b)=>{
//         return a - b
//     })
//     var index = nums.indexOf(0)
//         for(var i = 0;i < nums.length - 2;i++){
//             if(nums[i] <= 0){
//                 for(var n = i + 1;n < nums.length - 1;n++){
//                     if(nums[i] + nums[n] <= 0){
//                         if(n < index){
//                             for(var m = index + 1 ;m < nums.length;m++){
//                                 if(nums[i] + nums[n] + nums[m] === 0){
//                                     var arr = [nums[i],nums[n],nums[m]]
//                                     var str = arr.join()
//                                     if(!set.has(str)){
//                                         set.add(str)
//                                         res.push(arr)
//                                     }
                                    
//                                 }
//                             }
//                         }else{
//                             for(var m = n + 1 ;m < nums.length;m++){
//                                 if(nums[i] + nums[n] + nums[m] === 0){
//                                     var arr = [nums[i],nums[n],nums[m]]
//                                     var str = arr.join()
//                                     if(!set.has(str)){
//                                         set.add(str)
//                                         res.push(arr)
//                                     }
                                    
//                                 }
//                             }
//                         }
                       
//                     }else{
//                         break
//                     }
//                 }
//             }else{
//                 break
//             }
//         }
//         return res
// };




var threeSum = function(nums) {
    var res = []
    var set = new Set()
    nums = nums.sort((a,b)=>{
        return a - b
    })
    var left = undefined
    var right = undefined
        for(var i = 0;i < nums.length - 2;i++){
            if(nums[i] <= 0){
                left = i + 1
                right = nums.length - 1
                while(left !== right){
                    if(nums[left] + nums[right] + nums[i] >= 0){
                        if(nums[left] + nums[right] + nums[i] === 0){
                            arr = [nums[left], nums[right],nums[i]]
                            var str = arr.join('')
                            if(!set.has(str)){
                                set.add(str)
                                res.push(arr)
                            }
                            right--
                        }else{
                            right--
                        }
                    }else{
                        left++
                    }
                }
            }else{
                break
            }
        }
        return res
};


console.log(threeSum([-1,0,1,2,-1,-4]))
/**
 * 这道题使用双指针解题可以大幅度减少搜索的空间，要记住考虑重复问题
                LeetCoding
        读完题我就上手 操作起来稳如狗
        二话不说就提交 最终超时骂我草
        三顾题解再上手 提交错误心疾首
        寻思看看评论区 没想和我一样虚
        愁的我是头发白 做题还得自己来 
        反反复复终无误 击败百分三点五
 */