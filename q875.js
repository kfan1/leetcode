/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// Brute force
// var minEatingSpeed = function (piles, h) {
//   piles.sort((a, b) => a - b);
//   let sum = piles.reduce((acc, curr) => acc + curr);
//   let minK = Math.ceil(sum / h);

//   while (minK <= piles[piles.length - 1]) {
//     let x = [...piles];
//     for (let i = 0; i < h; i++) {
//       x[0] -= minK;
//       if (x[0] <= 0) x.shift();
//       if (!x.length) return minK;
//     }
//     minK++;
//   }
// };

// Better?
var minEatingSpeed = function (piles, h) {
  piles.sort((a, b) => a - b);
  let sum = piles.reduce((acc, curr) => acc + curr);
  let minK = Math.ceil(sum / h);
  let maxK = Math.max(...piles);

  while (minK < maxK) {
    let k = Math.floor((minK + maxK) / 2);
    let lengthToEat = 0;
    for (let i = 0; i < piles.length; i++) {
      lengthToEat += Math.ceil(piles[i] / k);
    }
    if (lengthToEat <= h) maxK = Math.floor((minK + maxK) / 2);
    else minK = Math.ceil((minK + maxK) / 2);
  }

  return minK;
};
