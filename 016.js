/**
 * 电话号码的字母组合
 * @param {*} digits 
 * @returns 
 */
var letterCombinations = function(digits) {
    var obj = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    var arr = [...digits]
    if(arr.length === 0){
        return []
    }else if(arr.length === 1){
        let keys = Object.keys(obj)
        for(var i = 0; i < keys.length;i++){
            if(keys[i] === arr[0]){
                return obj[keys[i]]
            }
        }
    }else{
        function dfs(newArr,arr,index){
            if(index >= arr.length){
                return newArr
            }else{
                var tem = []
               for(var i = 0; i < newArr.length;i++){
                   for(var n = 0; n < obj[arr[index]].length;n++){
                        tem.push(newArr[i] + obj[arr[index]][n])
                   }
               }
                return dfs(tem,arr,index + 1)
            }
        }
       return  dfs(obj[arr[0]],arr,1)
    }
};

console.log(letterCombinations(''))
/**
 * 使用的是递归，记得注意递归的参数和递归的出口。还有一点很重要，那就是递归的时候如果我们对递归的结果不做处理的话。
 * 那么我们就应该return dfs()。而不是直接dfs()
 */