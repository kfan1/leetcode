var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function preorderTraversal(root) {
    var res = [];
    if (!root)
        return res;
    res.push(root.val);
    if (root.left)
        res.push.apply(res, preorderTraversal(root.left));
    if (root.right)
        res.push.apply(res, preorderTraversal(root.right));
    return res;
}
