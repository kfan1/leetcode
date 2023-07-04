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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  (function invert(rootx) {
    if (!rootx) return;
    [rootx.left, rootx.right] = [rootx.right, rootx.left];
    invert(rootx.left);
    invert(rootx.right);
  })(root);

  return root;
};
