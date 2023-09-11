function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let curr = head;
  let numArr = [];

  while (curr) {
    numArr.push(curr.val);
    curr = curr.next;
  }

  let reversedArr = [];
  for (let i = 0; i < left - 1; i++) {
    reversedArr.push(numArr[i]);
  }
  for (let i = right - 1; i >= left - 1; i--) {
    reversedArr.push(numArr[i]);
  }
  for (let i = right; i < numArr.length; i++) {
    reversedArr.push(numArr[i]);
  }

  let newHead = new ListNode(reversedArr[0]);
  let newCurr = newHead;
  for (let i = 1; i < reversedArr.length; i++) {
    newCurr.next = new ListNode(reversedArr[i]);
    newCurr = newCurr.next;
  }

  return newHead;
};

let x = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(reverseBetween(x, 2, 4));
