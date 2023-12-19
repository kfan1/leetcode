/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // post order, last number will always be the root
  // in order, everything on the left of the root will on the left side of the tree and vise versa
  let res = new TreeNode();

  res.val = postorder[postorder.length - 1];

  let inOrderLeft = inorder.slice(0, inorder.indexOf(res.val));
  let inOrderRight = inorder.slice(inorder.indexOf(res.val) + 1);
  let postOrderLeft = postorder.slice(0, inOrderLeft.length);
  let postOrderRight = postorder.slice(inOrderLeft.length, postorder.length - 1);

  if (inOrderLeft.length >= 1) res.left = buildTree(inOrderLeft, postOrderLeft);
  if (inOrderRight.length >= 1) res.right = buildTree(inOrderRight, postOrderRight);

  return res;
};
