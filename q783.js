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
var minDiffInBST = function (root) {
  let valArr = [];
  (function traverse(root) {
    if (!root) return;
    traverse(root.left);
    valArr.push(root.val);
    traverse(root.right);
  })(root);

  let min = Infinity;

  for (let i = 0; i < valArr.length - 1; i++) {
    min = Math.min(valArr[i + 1] - valArr[i], min);
  }

  return min;
};
