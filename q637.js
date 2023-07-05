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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let levelMap = {};

  (function traverse(root, level) {
    if (!root) return;
    if (levelMap[level] !== undefined) {
      levelMap[level][0] += root.val;
      levelMap[level][1]++;
    } else {
      levelMap[level] = [];
      levelMap[level][0] = root.val;
      levelMap[level][1] = 1;
    }

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  })(root, 0);

  let res = [];
  for (let keys in levelMap) {
    res.push(levelMap[keys][0] / levelMap[keys][1]);
  }

  return res;
};
