var longestPalindrome = function(s) {
    var strArr = [...s]
    if(strArr.length < 2){
        return strArr.join('')
    }else{
        var length = 0
        var maxStr = ''
      for(var m = 0;m < strArr.length;m++){
          for(var n = m ;n < strArr.length;n++){
              var newArr = strArr.slice(m,n + 1)
              if(newArr.length < length){
                  continue
              }else{
                var a = newArr.join('')
                var b = newArr.reverse().join('')
                if(a === b){
                    if(newArr.length > length){
                        length = newArr.length
                        maxStr = a
                    }
                }
              }
          }
      }
      return maxStr
    }
};

console.log(longestPalindrome("bb"))