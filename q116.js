function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

var connect = function (root) {
  // simple breadth first search
  // the next value in a bfs queue is always the the value to the due right
  // need to take into account the end of lines however
  // it can be hardcoded using a counter cause each line will contain 1, 2, 4, 8... nodes

  const queue = [root, null];
  let level = 1;
  let currentCount = 0;

  while (queue.length) {
    curr = queue.shift();
    if (curr) {
      curr.next = queue[0];
      queue.push(curr.left);
      queue.push(curr.right);
      currentCount++;
      if (currentCount === level) {
        queue.push(null);
        level *= 2;
        currentCount = 0;
      }
    }
  }
  return root;
};

const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));

console.log(connect(root));
