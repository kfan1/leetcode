/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr.val) {
    let nextNode = curr.next;
    if (curr.val === nextNode.val) {
      curr.next = nextNode.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
