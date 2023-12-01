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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  // This code is to remove duplicates, leaving only one of each number, not removing all duplicate numbers entirely
  // let curr = head;
  // while (curr.next) {
  //   let nextNode = curr.next;
  //   if (curr.val === nextNode.val) {
  //     curr.next = nextNode.next;
  //   } else {
  //     curr = curr.next;
  //   }
  // }
  // return head;

  // This solution with creating a new linked list
  // if (!head || !head.next) return head;

  // let res = new ListNode();
  // const resConst = res;

  // let curr = head;
  // while (curr) {
  //   let nextNode = curr.next;
  //   if (nextNode && curr.val === nextNode.val) {
  //     while (curr.val === nextNode.val) {
  //       nextNode = nextNode.next;
  //       if (!nextNode) {
  //         prevRes.next = null;
  //         if (resConst === res) return null;
  //         else return resConst;
  //       }
  //     }
  //     curr = nextNode;
  //   } else {
  //     res.val = curr.val;
  //     res.next = new ListNode();
  //     prevRes = res;
  //     res = res.next;
  //     curr = curr.next;
  //   }
  // }
  // prevRes.next = null;
  // if (resConst === res) return null;
  // else return resConst;

  let prev = new ListNode();
  let res = prev;
  prev.next = head;
  let curr = prev.next;
  while (curr) {
    let nextNode = curr.next;
    if (nextNode && curr.val === nextNode.val) {
      while (curr && curr.val === nextNode.val) {
        curr = curr.next;
      }
    } else {
      prev.next = curr;
      prev = prev.next;
      curr = curr.next;
    }
  }
  prev.next = curr;

  return res.next;
};
