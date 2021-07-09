var lengthOfLongestSubstring = function(s) {
    var strArr = [...s]
    if(strArr.length < 2){
        return strArr.length
    }else{
        var windowArr = []
        var length = 1
            windowArr.push(strArr[0])
        for(var i = 1;i < strArr.length;i++){
            for(var m = 0;m < windowArr.length;m++){
                if(windowArr[m] === strArr[i]){
                    if(windowArr.length >= length){
                        length = windowArr.length
                    }
                    windowArr.splice(0,m + 1)
                    break
                }
            }
            if(i === strArr.length - 1){
                windowArr.push(strArr[i])
                return windowArr.length > length?windowArr.length:length
            }else{
                windowArr.push(strArr[i])
            }
        }
        return length
    }
};
/**
 * 这算是我的高光时刻吧，运行时间超过了100%的用户。
 * 解题思路如下  :
 * 首先解构字符串，然后判断长度，如果小于2，那么直接返回其长度。
 * 然后定义一个滑动窗口这个滑动窗口用来存放字符串的。
 * 详细的算法过程使这样的。首先将字符串第一个字符填入窗口中，在放入之前首先判断窗口中
 * 是否有相同的元素，如果有，那么就删除从第一个到这个相同元素之间的所有元素，然后再将元素添加进来。
 * 在每一次添加的时候必须做一个操作，那就是将删除前窗口的长度记录一下。如果但是在记录之前需要定义一个length
 * 这个length是用来存放窗口中的值的。每一次删除操作都需要判断窗口长度，如果长度大于length，那么就更新length，如果没有
 * 那么就不更新，保证length是窗口长度历史中的最大值。然后返回
 */