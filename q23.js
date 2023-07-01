// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) lists.splice(i--, 1);
  }

  if (!lists.length) return null;

  let newList = new ListNode();
  let res = newList;
  let smallestIndex;
  let smallestVal;

  while (lists.length) {
    smallestVal = lists[0].val;
    smallestIndex = 0;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < smallestVal) {
        smallestVal = lists[i].val;
        smallestIndex = i;
      }
    }
    lists[smallestIndex] = lists[smallestIndex].next;
    if (!lists[smallestIndex]) lists.splice(smallestIndex, 1);
    newList.val = smallestVal;
    if (lists.length) {
      newList.next = new ListNode();
      newList = newList.next;
    }
  }

  return res;
};


var mergeKLists = function (lists) {
  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) lists.splice(i--, 1);
  }

  if (!lists.length) return null;

  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      arr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  arr = arr.sort((a, b) => a - b);
  let res = new ListNode(arr[0]);
  let result = res;

  for (let i = 1; i < arr.length; i++) {
    res.next = new ListNode(arr[i]);
    res = res.next;
  }

  return result;
};
