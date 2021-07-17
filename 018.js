/**
 * 
 * @param {*} head 
 * @param {*} n 
 */
var removeNthFromEnd = function(head, n) {
   if(head.next === null){
       return null
   }else{
    var count = 1
    var fastNode = head
    var node = fastNode
    var start = null
    
        while(head){
           if(!head.next){
            break
           }else{
               head = head.next
               count++
           }
        }
        var index = count - n
        if(index === 0){
            return fastNode.next
        }else{
            for(var i = 0; i < index - 1;i++){
                node = node.next
            }
            start = node
            start.next = node.next.next
            return fastNode
        }
   }
        
};

/**
 * 我采用的是多次遍历。但是这种遍历的次数太多。我们可以使用快慢指针
 * 
 */

 var removeNthFromEnd = function(head, n) {
     if(!head.next){
         return null
     }else{
         var fastNode = null
         var slowNode = null
            fastNode = head
            slowNode = head
            while(n){
                fastNode = fastNode.next
                n--
            }
            if(fastNode === null){
                return head.next
            }else{
                while(fastNode.next){
                    fastNode = fastNode.next
                    slowNode = slowNode.next
                }
                slowNode.next = slowNode.next.next
                return head
            }
            
             
     }
 }
 /**
  * 第二种方式使用双指针中的快慢指针。让fast先走n步。不过这个速度好像还没有第一种方法快
  */