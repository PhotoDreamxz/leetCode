
/**
 * 合并两个有序链表
 * @param {*} l1 
 * @param {*} l2 
 */
var mergeTwoLists = function(l1, l2) {
    var newNodeList = new ListNode()
    var head = newNodeList
    var first = l1
    var second = l2
    while(first !== null||second !== null){
        var node = new ListNode()
           if(first&&second){
        
                if(first.val >= second.val){
                    node.val = second.val
                    newNodeList.next = node
                    newNodeList = newNodeList.next
                    second = second.next
                }else{
                    node.val = first.val
                    newNodeList.next = node
                    newNodeList = newNodeList.next
                    first = first.next
                }
           }else if(first){
                newNodeList.next = first
                first = null
           }else{
               newNodeList.next = second
               second = null
           }
    }
    return head.next
};

/**
 * 这道题原本想用递归，但是递归的设计有点麻烦，所有就用了双指针。定义两个指针分别指向的是两个链表的首位。
 * 然后进行比较，如果谁小，我们就定义一个新的，然后将器放入到新链表中，然后该链表的指针后移。直到两个指针的指向都为null
 * 在这里我们需要注意一下几点：
 * 1，while循环跳出的条件，也就是什么时候跳出。这里是当任意指针不为空时进入
 * 2，关于两个指针的指向。当这个节点放入到新的链表之后，这个指针就应该后移
 * 3，什么时候我们的新链表的值变化。一般情况下我们定义一个变量来存储当前最新的增加节点，这里是newListNode。
 * 但是我们要知道，当我们新生成一个节点node的时候，先将该节点接在newListNode当前节点的后面。然后将newListNode的值后移
 * 即 newListNode.next = node newListNode = newListNode.next
 */