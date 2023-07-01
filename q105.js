function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  // first item in a preorder will always be the root
  // all the values on the left of the root value in 'inorder' will be on the left side of the tree and vice versa
  if (inorder.length === 0 || preorder.length === 0) return null;
  const result = new TreeNode(preorder[0]);
  // if you split the preorder array in half (not necessarily 50%, just in two pieces) so that all the values in the first half are on the left side of the tree (determined by the inorder array) and all the values in the second half are on the right side of the tree, and maintain the same order from the original preorder array, without the root value, you will have two arrays where the first item will be the root of the smaller array
  // this way you can use recursion with the preorder and inorder halves
  // exclude the root in all these halves
  const leftInorder = inorder.slice(0, inorder.indexOf(preorder[0]));
  const rightInorder = inorder.slice(inorder.indexOf(preorder[0]) + 1);
  let indexOfFirstValueFromPreorderInRightInorder;
  for (let i = 0; i < preorder.length; i++) {
    if (rightInorder.includes(preorder[i])) {
      indexOfFirstValueFromPreorderInRightInorder = i;
      break;
    }
  }
  const leftPreorder = preorder.slice(1, indexOfFirstValueFromPreorderInRightInorder);
  const rightPreorder = preorder.slice(indexOfFirstValueFromPreorderInRightInorder);
  result.left = buildTree(leftPreorder, leftInorder);
  result.right = buildTree(rightPreorder, rightInorder);

  return result;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));


// way cleaner solution from leetcode
// var buildTree = function (preorder, inorder) {
//   if (inorder.length === 0 || preorder.length === 0) return null;
//   const result = new TreeNode(preorder[0]);

//   let index = inorder.indexOf(preorder[0])

//   result.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//   result.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

//   return result;
// };

