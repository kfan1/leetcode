class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  res.push(root.val);
  if (root.left) res.push(...preorderTraversal(root.left));
  if (root.right) res.push(...preorderTraversal(root.right));
  return res;
}
