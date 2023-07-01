// var maxArea = function(height) {
//     var lp = 0
//     var rp = height.length-1
//     var lh = height[lp]
//     var rh = height[rp]
//     var maxA = Math.min(lh, rh)*(rp-lp)
//     for(let i=1; i<height.length-1; i++){
//         if(lh<=rh){
//             lp++
//             lh = Math.max(lh, height[lp])
//         }
//         else{
//             rp--
//             rh = Math.max(rh, height[rp])
//         }
//         maxA = Math.max(maxA, Math.min(lh, rh)*(rp-lp))
//     }
//     return maxA
// };

// so height of the smaller one times width = volume
// so check the first and last bars volume, thats the starting volume
// *move whichever is smaller inwards, and check the volume again
// if volume is greater than previous volume thats the new bar (either left or right)
// else repeat the asterisk until left and right are equal

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxLP = 0;
  let maxRP = height.length - 1;
  let maxVolume = Math.min(height[leftPointer], height[rightPointer]) * (height.length - 1);
  let width = height.length - 1;

  while (leftPointer !== rightPointer) {
    width--;
    if (height[leftPointer] < height[rightPointer]) leftPointer++;
    else rightPointer--;
    if (Math.min(height[leftPointer], height[rightPointer]) * width > maxVolume) {
      maxLP = leftPointer;
      maxRP = rightPointer;
      maxVolume = Math.min(height[leftPointer], height[rightPointer]) * width;
    }
  }

  return maxVolume;
};
