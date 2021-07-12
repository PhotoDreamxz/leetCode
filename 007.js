/**
 * 整数反转
 * @param {*} x 
 */
var reverse = function(x) {
    if(x > 0){
        x = x + ''
        var arr = [...x].reverse()
            if(arr[0] === '0'){
                arr = arr.splice(1)
                return parseInt(arr.join('')) > 2147483647 ?0:parseInt(arr.join(''))
            }else{
                return parseInt(arr.join('')) > 2147483647 ?0:parseInt(arr.join(''))
            }
        
    }else if(x === 0){
        return x
    }else{
        x = x + ''
        var arr = [...x].reverse()
            if(arr[0] === '0'){
                arr = arr.splice(1)
                return parseInt(arr.join(''))*-1 < -2147483648?0:parseInt(arr.join(''))*-1
            }else{
                return parseInt(arr.join(''))*-1 < -2147483648?0:parseInt(arr.join(''))*-1
            }
    }
};

/**
 * 很简单，没有什么需要特别说明的
 */