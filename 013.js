/**
 * 长公共前缀
 * @param {*} strs 
 * @returns 
 */

var longestCommonPrefix = function(strs) {
    var flag = true
    var maxStr = ''
        for(var i = 0;i < 200;i++){
            var startStr = strs[0].charAt(i)
                if(startStr){
                    for(var m = 0; m < strs.length;m++){
                        if(strs[m].charAt(i) !== startStr){
                            flag = false
                        }
                    }
                    if(flag){
                        maxStr += startStr
                    }else{
                        break
                    }
                }else{
                    break
                }
        }

        return maxStr
};
/**
 * 没有什么技术含量，使用纵向扫描
 */
