/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let counter = 0;
  (function traverseTree(rootx) {
    if (rootx === null) return;
    else {
      counter++;
      traverseTree(rootx.left);
      traverseTree(rootx.right);
    }
  })(root);
  return counter;
};
