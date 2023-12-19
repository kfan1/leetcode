/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0) return head;

  // count the number of nodes in the linked list
  let total = 0;
  let curr = head;
  while (curr) {
    total++;
    curr = curr.next;
  }

  // because k can be greater than total, find the remainder of k/total
  let remainderK = k % total;

  if (remainderK === 0 || total === 0) return head;

  // find the new k node from the end and rotate, can use faster and slower pointer
  let fastP = head;
  let slowP = head;
  for (let i = 0; i < remainderK; i++) fastP = fastP.next;
  while (fastP.next) {
    fastP = fastP.next;
    slowP = slowP.next;
  }
  // remove the next of the slow pointer, and move the head to the next of the fast pointer
  let res = slowP.next;
  slowP.next = null;
  fastP.next = head;
  return res;
};
