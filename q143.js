class LinkedList {
  constructor(value) {
    this.val = value || null;
    this.next = null;
  }
}

var reorderList = function (head) {
  let curr = head;
  while (curr) {
    let lastNode = curr;
    while (lastNode.next) {
      let nextNode = lastNode.next;
      if (!nextNode.next) {
        lastNode.next = null;
      }
      lastNode = nextNode;
    }
    let tempNode = curr.next;
    curr.next = lastNode;
    lastNode.next = tempNode;
    curr = curr.next;
    if (curr) curr = curr.next;
  }
  return head;
};

let LL = new LinkedList(1);
LL.next = new LinkedList(2);
LL.next.next = new LinkedList(3);
LL.next.next.next = new LinkedList(4);
LL.next.next.next.next = new LinkedList(5);
LL.next.next.next.next.next = new LinkedList(6);

console.log(LL);

console.log(reorderList(LL));
