/**
 * 有效的括号
 * @param {*} s 
 */
var isValid = function(s) {
    var strArr = [...s]
    var stack = []
    for(var i = 0;i < strArr.length;i++){
        switch(strArr[i]){
            case '(':{
                stack.push('(')
                break
            }
            case '[':{
                stack.push('[')
                break
            }
            case '{':{
                stack.push('{')
                break
            }
            case ')':{
                if(stack[stack.length - 1] === '('){
                    stack.pop()
                }else{
                    return false
                }
                break
            }
            case ']':{
                if(stack[stack.length - 1] === '['){
                    stack.pop()
                }else{
                    return false
                }
                break
            }
            case '}':{
                if(stack[stack.length - 1] === '{'){
                    stack.pop()
                }else{
                    return false
                }
                break
            }

        }
    }
    if(stack.length){
        return false
    }else{
        return true
    }
};

console.log(isValid('()]'))

/**
 * 这个题并没有什么好讲的，就是使用数组作为栈结构。然后入栈出栈
 */