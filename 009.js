/**
 * 判断回文数
 * @param {*} x 
 * @returns 
 */
var isPalindrome = function(x) {
    x = x + ''
 var arr = [...x]
 if(arr.join('') === arr.reverse().join('')){
     return true
 }else{
     return false
 }
};