/**
 * K 个一组翻转链表
 * @param {*} head 
 * @param {*} k 
 */
var reverseKGroup = function(head, k) {
    if(!head.next){
        return head
    }else{
        var newListNode = new ListNode()
      
        changeKListNode(head)
        return newListNode
    }
    
};


function changeKListNode(head){
    if(!head){
        return
    }
    var node = head
    let count = 0
    while(node){
        count++
        node = node.next
    }
    console.log(count)
    if( count < k){
        newListNode = head
    }else{
        var stack = new ListNode()//我们用栈的形式来对指定链表片段进行反转
        var stackButton = null
        let node = head
        let count = k - 1
        while(count){
            count--
            node = node.next
        }
        let deepNode = node.next
        console.log(deepNode)
            node.next = null
            stackButton = head
        let cycNode = head
        while(cycNode){
            let nextNode = cycNode.next
                cycNode.next = null
            let tem = stack.next
                stack.next = cycNode
                cycNode.next = tem
                cycNode = nextNode
        }
        console.log(stack.next)
        newListNode.next = stack.next
        console.log(newListNode)
        newListNode = stackButton
        changeKListNode(deepNode)
    }
}