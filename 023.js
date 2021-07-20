/**
 * 两两交换链表中的节点
 * @param {*} head 
 */
var swapPairs = function(head) {
    if(!head){
        return null
    }
    if(head.next === null){
        return head
    }else{
        var newNode = new ListNode()
        var newHead = newNode
        function changeNode(head){
            if(!head){
                return newNode
            }else if(head&&!head.next){
                newNode.next = head
                return 
            }else{
                let node = head.next.next//保存第三个节点
                    head.next.next = null//防止循环引用
                    newNode.next = head.next
                    head.next = null
                    newNode.next.next = head
                    newNode = newNode.next.next
               changeNode(node)
            }
        }
        changeNode(head)
        return newHead.next
    }
};

/**
 * 总体思路是使用递归,然后两两交换
 */