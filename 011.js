/**
 * 整数转罗马数字
 * @param {*} num 
 */

var intToRoman = function(num) {
    var obj = {
        "I":0,//1
        "IV":0,//4
        "V":0,//5
        "IX":0,//9
        "X":0,//10
        "XL":0,//40
        "L":0,//50
        "XC":0,//90
        "C":0,//100
        "CD":0,//400
        "D":0,//500
        "CM":0,//900
        "M":0,//1000        
    }
        obj['M'] = parseInt(num/1000)
            num = num%1000
        obj['CM'] = parseInt(num/900)
            num = num%900
        obj['D'] = parseInt(num/500)
            num = num%500
        obj['CD'] = parseInt(num/400)
            num = num%400
        obj['C'] = parseInt(num/100)
            num = num%100
        obj['XC'] = parseInt(num/90)
            num = num%90
        obj['L'] = parseInt(num/50)
            num = num%50
        obj['XL'] = parseInt(num/40)
            num = num%40
        obj['X'] = parseInt(num/10)
            num = num%10
        obj['IX'] = parseInt(num/9)
            num = num%9
        obj['V'] = parseInt(num/5)
            num = num%5
        obj['IV'] = parseInt(num/4)
            num = num%4
        obj['I'] = parseInt(num/1)
            num = num%1
    // console.log(obj)
    var keys = Object.keys(obj)
    keys = keys.reverse()
    let res = ''
    for(var i = 0;i < keys.length;i++){
        var key = ''
        for(var m = 0;m < obj[keys[i]];m++){
            key = key + keys[i]
        }
        res = res + key
    }
    return res
};

console.log(intToRoman(58))
/**
 * 说实话，没啥可以解释的
 */