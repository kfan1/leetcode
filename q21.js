// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1) return list2;
  if (!list2) return list1;

  let [curr1, curr2] = [list1, list2];
  let res = new ListNode(curr1.val < curr2.val ? curr1.val : curr2.val);
  let result = res;

  curr1.val < curr2.val ? (curr1 = curr1.next) : (curr2 = curr2.next);

  while (curr1 && curr2) {
    res.next = new ListNode();
    res = res.next;
    if (curr1.val < curr2.val) {
      res.val = curr1.val;
      curr1 = curr1.next;
    } else {
      res.val = curr2.val;
      curr2 = curr2.next;
    }
  }

  res.next = curr1 ? curr1 : curr2;
  return result;
};

list1 = [1,4], list2 = [1,3]

var mergeTwoLists = function (list1, list2) {
  if(!list1 && !list2) return null
  if(!list1) return list2i
  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
  if(list1.val >= list2.val){
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};

