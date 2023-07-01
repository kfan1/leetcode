function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var removeNthFromEnd = function(head, n) {
    var array = []    
    function recursion(head1){
        array.push(head1.val)
        if(!head1.next){}
        else{            
            recursion(head1.next)
        }
    }
    recursion(head)
    
    array.splice(array.length-n, 1)
    if(array.length === 0){
        return null
    }
    var newHead = tail = new ListNode(array[0])

    for(let i=1; i<array.length; i++){
        tail.next = new ListNode(array[i])
        tail = tail.next
    }

    return newHead
};


let x = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(removeNthFromEnd(x, 2))