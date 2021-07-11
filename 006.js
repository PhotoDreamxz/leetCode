/**
 *  Z 字形变换
 * @param {*} s 
 * @param {*} numRows 
 * @returns 
 */

var convert = function(s, numRows) {
   if(numRows === 1){
       return s
   }else{
    var strArr = [...s]
    var arr = []
    for(var i = 1 ;i <= numRows;i++){
        arr.push([])
    }
    var index = 1
    for(var m = 0,k = 1; m < strArr.length;m++,k+=index){
        if(k === numRows){
            index = -1
            arr[k-1].push(strArr[m])
        }else if(k === 1){
            index = 1
            arr[k-1].push(strArr[m])
        }else{
            arr[k-1].push(strArr[m])
        }
    }
    var str = ''
    for(var n = 0;n < numRows;n++){
        str += arr[n].join('')
    }
    return str
   }
};

console.log(convert('PAYPALISHIRING',3))
/**
 * 其实这个接替思路很简单。z型就是每一个字符的索引起伏，例如abcdef 3。那么每一个字符的顺序就是123212。那么我们将对于的
 * 字符放入到对应的数组中即可。
 */