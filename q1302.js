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
var deepestLeavesSum = function (root) {
  const depthMap = new Object();

  (function traversal(node = root, depth = 0) {
    if (!node.left && !node.right) return (depthMap[depth] = (depthMap[depth] || 0) + node.val);
    if (node.left) traversal(node.left, depth + 1);
    if (node.right) traversal(node.right, depth + 1);
  })();

  return depthMap[Math.max(...Object.keys(depthMap))];
};
