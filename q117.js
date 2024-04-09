/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

// var connect = function (root) {
//   let queue = [];
//   let curr = root;

//   let nodes = 0;
//   let nodesPerRow = 1;

//   while (curr) {
//     nodes++;

//     if (curr != 'placeholder') {
//       if (curr.left != null) queue.push(curr.left);
//       else queue.push('placeholder');
//       if (curr.right != null) queue.push(curr.right);
//       else queue.push('placeholder');
//     } else {
//       queue.push('placeholder');
//       queue.push('placeholder');
//     }

//     if (nodes === nodesPerRow) {
//       nodesPerRow *= 2;
//       nodes = 0;
//     } else {
//       while (queue[0] === 'placeholder') {
//         queue.shift();
//         queue.push('placeholder');
//         queue.push('placeholder');
//         nodes++;
//         if (nodes === nodesPerRow) {
//           nodesPerRow *= 2;
//           nodes = 0;
//           let cont = false;
//           for (let i = 0; i < queue.length; i++) {
//             if (queue[i] != 'placeholder') {
//               cont = true;
//               break;
//             }
//           }
//           if (!cont) {
//             return root;
//           }
//           break;
//         }
//       }
//     }

//     if (nodes !== 0) {
//       curr.next = queue[0];
//     }

//     curr = queue.shift();
//   }

//   return root;
// };

// var connect = function (root) {
//   let queue = [];
//   let queueTracker = [root];
//   let curr = root;

//   while (curr) {
//     if (curr === 'placeholder') {
//       queue.push('placeholder');
//       queue.push('placeholder');
//       queueTracker.push('placeholder');
//       queueTracker.push('placeholder');
//     } else {
//       if (curr.left != null) {
//         queue.push(curr.left);
//         queueTracker.push(curr.left);
//       } else {
//         queue.push('placeholder');
//         queueTracker.push('placeholder');
//       }
//       if (curr.right != null) {
//         queue.push(curr.right);
//         queueTracker.push(curr.right);
//       } else {
//         queue.push('placeholder');
//         queueTracker.push('placeholder');
//       }
//     }

//     if (queue.every((node) => node === 'placeholder')) queue[0] = null;
//     curr = queue.shift();
//   }

//   let nodes = 0;
//   let nodesPerRow = 1;

//   curr = queueTracker.shift();
//   while (queueTracker.length) {
//     nodes++;
//     if (nodes === nodesPerRow) {
//       nodes = 0;
//       nodesPerRow *= 2;
//     } else {
//       // find the next node, before row end
//       for (let i = 0; i < nodesPerRow - nodes; i++) {
//         if (queueTracker[i] !== 'placeholder') {
//           curr.next = queueTracker[i];
//           break;
//         }
//       }
//     }

//     curr = queueTracker.shift();
//   }

//   return root;
// };

var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let rowQueue = [];
    while (queue.length) {
      let curr = queue.shift();
      if (curr.left) rowQueue.push(curr.left);
      if (curr.right) rowQueue.push(curr.right);
    }
    for (let i = 0; i < rowQueue.length - 1; i++) {
      rowQueue[i].next = rowQueue[i + 1];
    }
    queue = rowQueue;
  }
  return root;
};

const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, undefined, new Node(7)));
console.log(connect(root));

const root2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(connect(root2));
