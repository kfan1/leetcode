function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  if (inorder.length === 0 || preorder.length === 0) return null;
  const result = new TreeNode(preorder[0]);

  let index = inorder.indexOf(preorder[0]);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPreorder = preorder.slice(1, index + 1);
  const rightPreorder = preorder.slice(index + 1);
  result.left = buildTree(leftPreorder, leftInorder);
  result.right = buildTree(rightPreorder, rightInorder);

  return result;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
