/**
 * 两数相加
 */
/**
 * 首先要搞清楚l1和l2是什么，很明显是每一个数的第一个值得引用对象。
 */


 var addTwoNumbers = function(l1, l2) {
        var l1Node = reL1Node = l1
        var l2Node = reL2Node = l2
        var flag = false
        var tem = null
        while(l1 !== null||l2 !==null){
            if(l1&&l2){
                tem = l1.val
                l1.val = l1.val + l2.val
                l2.val = tem + l2.val
                l1 = l1.next
                l2 = l2.next
            }else if(l1){
                //说明l1的链比较长
                break
            }else if(l2){
                //说明l2比较长
                flag = true
                break
            }

        }
        var cacheNumber = 0
        if(flag){
            //说明l2比较长
            while(l2Node){
                if(cacheNumber !== 0){
                   l2Node.val = l2Node.val + 1
                   if(l2Node.val > 9&&l2Node.next){
                       l2Node.val = l2Node.val%10
                       cacheNumber = 1
                   }else if(l2Node.val > 9&&!l2Node.next){
                        l2Node.val = l2Node.val%10
                       l2Node.next = {
                           val:1,
                           next:null
                       }
                       break
                   }else{
                    cacheNumber = 0
                   }
                   l2Node = l2Node.next
                }else{
                    if(l2Node.val > 9&&l2Node.next){
                        l2Node.val = l2Node.val%10
                        cacheNumber = 1
                    }else if(l2Node.val > 9&&!l2Node.next){
                         l2Node.val = l2Node.val%10
                        l2Node.next = {
                            val:1,
                            next:null
                        }
                        break
                    }else{
                     cacheNumber = 0
                    }
                    l2Node = l2Node.next
                }
            }
            return reL2Node
        }else{
            while(l1Node){
                if(cacheNumber !== 0){
                   l1Node.val = l1Node.val + 1
                   if(l1Node.val > 9&&l1Node.next){
                    l1Node.val = l1Node.val%10
                    cacheNumber = 1
                    }else if(l1Node.val > 9&&!l1Node.next){
                        l1Node.val = l1Node.val%10
                        l1Node.next = {
                            val:1,
                            next:null
                        }
                        break
                    }else{
                    cacheNumber = 0
                    }
                   l1Node = l1Node.next
                }else{
                    if(l1Node.val > 9&&l1Node.next){
                        l1Node.val = l1Node.val%10
                        cacheNumber = 1
                    }else if(l1Node.val > 9&&!l1Node.next){
                         l1Node.val = l1Node.val%10
                        l1Node.next = {
                            val:1,
                            next:null
                        }
                        break
                    }else{
                     cacheNumber = 0
                    }
                    l1Node = l1Node.next
                }
            }
            return reL1Node
        }
 }
 /**
  * 我的思路是先将l1中的值加到l2上，l2中的值加到l1上，同时判断出它们的长度。然后遍历判断节点所造在的值是否大于9，如果大于
  * 那么产生进位。但是这里有一个问题，那就是如果我们最后一位仍然大于9，我们需要进行补位操作
  */