// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const hashMap = new Map();
  let curr = head;
  while (curr) {
    hashMap.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    hashMap.get(curr).next = hashMap.get(curr.next) || null;
    hashMap.get(curr).random = hashMap.get(curr.random) || null;
    curr = curr.next;
  }

  return hashMap.get(head);
};

