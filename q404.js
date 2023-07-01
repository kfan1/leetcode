var sumOfLeftLeaves = function(root, left = false) {
  if(!root) return 0
  if(!root.left && !root.right && left) return root.val
  if(!root.left && !root.right) return 0
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
};