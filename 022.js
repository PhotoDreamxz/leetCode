/**
 * 合并K个升序链表
 * @param {*} lists 
 */
var mergeKLists = function(lists) {
   if(lists.length  === 0){
       return null
   }else if(lists.length === 1){
        return lists[0]
   }else{
    var len = lists.length
    var index = 1
    function mergeList(mergedList,newList,index){
        if(index > len){
            return mergedList
        }else{
            var head = new ListNode() ,node = head
                while(mergedList&&newList){
                    if(mergedList.val > newList.val){
                        node.next = newList
                        newList = newList.next
                    }else{
                        node.next = mergedList
                        mergedList = mergedList.next
                    }
                    node = node.next
                }
                if(mergedList){
                    node.next = mergedList
                }else{
                    node.next = newList
                }
                index += 1
               return mergeList(head.next,lists[index-1],index)
        }
    }
    index += 1
   return  mergeList(lists[0],lists[1],index)
   }
};

/**
 * 假如我们要新建一个链表，我们将给这个链表添加元素，那么我们该如何获取到最后生成的链表呢？意思是获取到这个链表的头指针。
 * 其实很简单，那就是我们可以定义一个新的节点var node = new Node()，然后var head = node。但是这个node并不是我们链表里面的成员。此时我们
 * 每一次创建的节点都这样做：
 *         node.next = newNode
 *         node = newNode
 * 这样就可以获取到最后生成的链表了，只要调用head.next即可。
 */

/**
 * 这道题的思路是使用递归，先将第一和第而合并合并后的和第三合并，然后新合并后的和第四合并，一次类推。
 * 需要注意的是，我们在合并两个链表的时候，根本不需要新建节点。我们只需要新建一个指向链表的头部。然后进行比较
 * 哪个节点的值小，就把哪个节点放到head这个新的链表中去，而不是新建一个节点。这样就节约了空间，这正式解这道题的关键
 */