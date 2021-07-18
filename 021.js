
/**
 * 括号生成
 * @param {*} n 
 */
var generateParenthesis = function(n) {
    if(n === 1){
        return ['()']
    }else{
        var left = n
        var right = n
        var arr = []
        dfs(n,"",arr,left,right)
        return arr
    }
};

function dfs(n,path,res,left,right){
    if(path.length === n*2){
        res.push(path)
        return 
    }else{
        if(left > 0){
            dfs(n,path + '(',res,left - 1,right)
           
        }
         if(right > left){
            dfs(n,path + ')',res,left, right - 1)
        }
       
        
    }
}