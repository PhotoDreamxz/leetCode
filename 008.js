/**
 * 字符串转换整数 (atoi)
 * @param {*} s 
 * @returns 
 */
var myAtoi = function(s) {
    if(s === ""){
        return 0
    }else if(s === ' '){
        return 0
    }else{
        var strArr = [...s]
    var window = []
    var flag = ''
    for(var i = 0;i < strArr.length;i++){//针对数字
        if(strArr[i] === '0'||
            strArr[i] === '1'||
            strArr[i] === '2'||
            strArr[i] === '3'||
            strArr[i] === '4'||
            strArr[i] === '5'||
            strArr[i] === '6'||
            strArr[i] === '7'||
            strArr[i] === '8'||
            strArr[i] === '9'
        ){
           if(window.length === 0){
                if(i!==0&&strArr[i -1] === '-'){
                    flag = '-'
                }
           }
           window.push(strArr[i])
        }else if(strArr[i] !== ' '&&strArr[i] !=='-'&&strArr[i]!=='+'){//针对字母
            if(window.length === 0){
                window.push('0')
                break
            }else{
                break
            }
        }else if(strArr[i] === '+'||strArr[i] === '-'){

            if(window.length === 0){
               if(strArr[i + 1] !== '0'&&
               strArr[i + 1] !== '1'&&
               strArr[i + 1] !== '2'&&
               strArr[i + 1] !== '3'&&
               strArr[i + 1] !== '4'&&
               strArr[i + 1] !== '5'&&
               strArr[i + 1] !== '6'&&
               strArr[i + 1] !== '7'&&
               strArr[i + 1] !== '8'&&
               strArr[i + 1] !== '9'){
                   break
               }else{
                   flag = strArr[i]
               }
            }else{
                break
            }
           
        }else{//针对空格
            if(window.length !== 0){
                break
            }else{
                ;
            }
        }
    }
    if(flag === ''){
        flag = '+'
    }
    if(window.length === 0){
        window.push('0')
    }
    var numberStr = window.join('')
    var number = parseInt(numberStr)
    if(flag == '+'){
        number = number
    }else{
        number = number*-1
    }
    if(number > 2147483647){
        number = 2147483647
    }
    if(number < -2147483648){
        number = -2147483648
    }
    return number
    }
};

console.log(myAtoi('  -42'))


/**
 * 没啥技巧，即使看你是否细心
 */