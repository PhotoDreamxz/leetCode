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