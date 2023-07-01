function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var minimumOperations = function (root) {
  let res = {};
  let sorts = 0;

  (function dfs(root, layer = 0) {
    if (!root) return;
    res[layer] ? res[layer].push(root.val) : (res[layer] = [root.val]);
    layer++;
    dfs(root.left, layer);
    dfs(root.right, layer);
  })(root);

  for (let layers of Object.values(res)) {
    let unsorted = [...layers];
    layers.sort((a, b) => a - b);
    for (let i = 0; i < layers.length; i++) {
      while (layers[i] !== unsorted[i]) {
        let newI = layers.indexOf(unsorted[i]);
        [unsorted[i], unsorted[newI]] = [unsorted[newI], unsorted[i]];
        sorts++;
      }
    }
  }

  return sorts;
};
