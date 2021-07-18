
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

/**
 * 这里我想说一说如何遍历整个二叉树。遍历二叉树我们肯动使用的是深度遍历优先，即dfs。
 * 首先来说结论，如果我们想要遍历整个二叉树，那么我们需要在dfs内部调用两个dfs。即：
 * dfs(){
 *     .....
 *      dfs()
 *      dfs()
 * }
 * 首先我们需要知道，如果我们想要遍历二叉树，那么首先需要构建二叉树。我们就以这道题为例，这道题构建二叉
 */