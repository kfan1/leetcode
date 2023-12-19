/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;
  
  // separate list into two lists, one with the smaller and one with the larger
  let currSmallList = new ListNode();
  let currLargeList = new ListNode();
  let curr = head;
  let smallList = currSmallList;
  let largeList = currLargeList;
  while (curr) {
    if (curr.val >= x) {
      currLargeList.next = new ListNode();
      currLargeList = currLargeList.next;
      currLargeList.val = curr.val;
    } else {
      currSmallList.next = new ListNode();
      currSmallList = currSmallList.next;
      currSmallList.val = curr.val;
    }
    curr = curr.next;
  }
  // combine the lists
  currSmallList.next = largeList.next;

  return smallList.next;
};
