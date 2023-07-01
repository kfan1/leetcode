function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  let preOrderArr = [];
  let currNum = '';
  let dashes = false;
  let dashNum = 0;
  while (traversal.length) {
    if (traversal[0] !== '-' && dashes) dashes = !dashes;
    if (dashes) dashNum++;
    if (!dashes) currNum += traversal[0];
    if (traversal[0] === '-' && !dashes) {
      preOrderArr.push({ depth: dashNum, value: Number(currNum.slice(0, currNum.length - 1)) });
      dashes = !dashes;
      dashNum = 1;
      currNum = '';
    }
    traversal = traversal.slice(1);
  }
  
  preOrderArr.push({ depth: dashNum, value: Number(currNum) });

  function buildTree(array, currDepth) {
    if (!array.length) return null;
    if (array.length === 1) return new TreeNode(array.shift().value);
    let res = new TreeNode(array.shift().value);

    let leftArr;
    let rightArr;
    let middle = 1;

    for (let i = 1; i < array.length; i++) {
      if (array[i].depth === currDepth) break;
      middle++;
    }

    leftArr = array.slice(0, middle);
    rightArr = array.slice(middle);

    res.left = buildTree(leftArr, currDepth + 1);
    res.right = buildTree(rightArr, currDepth + 1);

    return res;
  }

  return buildTree(preOrderArr, 1);
};
