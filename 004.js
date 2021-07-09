/**
 * 寻找两个正序数组的中位数
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = [...nums1,...nums2]
        newArr.sort((a,b)=>{
            return a - b
        })
        if(newArr.length%2 === 0){
            var start = parseInt((newArr.length - 1)/2)
            var end = parseInt((newArr.length)/2)
            return (newArr[start] + newArr[end])/2.0
        }else{
            var start = parseInt((newArr.length - 1)/2)
            return newArr[start]
        }
};