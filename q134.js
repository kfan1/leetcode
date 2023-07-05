// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function (gas, cost) {
//   for (let i = 0; i < gas.length; i++) {
//     if (gas[i] !== 0) {
//       let currLoc = i;
//       let gasAvailable = 0;
//       let once = true;
//       while (true) {
//         gasAvailable += gas[currLoc];
//         gasAvailable -= cost[currLoc];
//         if (gasAvailable < 0) break;
//         currLoc++;
//         if (currLoc >= gas.length && once) {
//           currLoc -= gas.length;
//           once = false;
//         }
//         if (currLoc === i) return i;
//       }
//     }
//   }
//   return -1;
// };

// var canCompleteCircuit = function (gas, cost) {
//   function canMakeIt(index) {
//     let currLoc = index;
//     let gasAvailable = 0;
//     let once = true;
//     while (true) {
//       gasAvailable += gas[currLoc];
//       gasAvailable -= cost[currLoc];
//       if (gasAvailable < 0) break;
//       currLoc++;
//       if (currLoc >= gas.length && once) {
//         currLoc -= gas.length;
//         once = false;
//       }
//       if (currLoc === index) return true;
//     }
//     return false;
//   }

//   let maxDiff = [-Infinity, null];
//   for (let i = 0; i < gas.length; i++) {
//     if (gas[i] - cost[i] > maxDiff[0]) maxDiff = [gas[i] - cost[i], i];
//   }
//   return canMakeIt(maxDiff[1]) ? maxDiff[1] : -1;
// };

var canCompleteCircuit = function (gas, cost) {
  if (gas.length === 1) return gas[0] >= cost[0];
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] <= cost[i]) continue;
    let currLoc = i;
    let gasAvailable = 0;
    let once = true;
    while (true) {
      gasAvailable += gas[currLoc];
      gasAvailable -= cost[currLoc];
      if (gasAvailable < 0) {
        if (once) {
          i = currLoc;
          break;
        } else break;
      }
      currLoc++;
      if (currLoc >= gas.length) {
        if (once) {
          currLoc -= gas.length;
          once = false;
        } else break;
      }
      if (currLoc === i) return i;
    }
  }
  return -1;
};

