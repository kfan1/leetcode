var spiralOrder = function(matrix) {
    let output = [];
    let length = 0;
    let max_length = matrix[0].length-1;
    let height = 0;
    let max_height = matrix.length-1;
    let total_numbers = matrix.length*matrix[0].length
    while(true){
        for(let i=length; i<=max_length; i++){
            output.push(matrix[height][i])
        }
        if(total_numbers == output.length) return output
        height++
        for(let i=height; i<=max_height; i++){
            output.push(matrix[i][max_length])
        }
        if(total_numbers == output.length) return output
        max_length--
        for(let i=max_length; i>=length; i--){
            output.push(matrix[max_height][i])
        }
        if(total_numbers == output.length) return output
        max_height--
        for(let i=max_height; i>=height; i--){
            output.push(matrix[i][length])
        }
        if(total_numbers == output.length) return output
        length++
    }
};

let test1 = [[1,2,3],[4,5,6],[7,8,9]]
let test2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

// console.log(spiralOrder(test1)) // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(test2)) // [1,2,3,4,8,12,11,10,9,5,6,7]