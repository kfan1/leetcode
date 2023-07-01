// var isValidSudoku = function(board) {

//     for(let i=0; i<9; i++){
//         var obj1 = {
//             1:0,
//             2:0,
//             3:0,
//             4:0,
//             5:0,
//             6:0,
//             7:0,
//             8:0,
//             9:0
//         }
//         var obj2 = {
//             1:0,
//             2:0,
//             3:0,
//             4:0,
//             5:0,
//             6:0,
//             7:0,
//             8:0,
//             9:0
//         }
//         for(let n=0; n<9; n++){
//             if(!(board[i][n] in obj1) && board[i][n] !== ".") return false
//             delete obj1[board[i][n]]
//             if(!(board[n][i] in obj2) && board[n][i] !== ".") return false
//             delete obj2[board[n][i]]
//         }
//     }

//     for(let x=0; x<3; x++){
//         for(let a=0; a<3; a++){
//             var obj3 = {
//                 1:0,
//                 2:0,
//                 3:0,
//                 4:0,
//                 5:0,
//                 6:0,
//                 7:0,
//                 8:0,
//                 9:0
//             }
//             for(let i=0+(a*3); i<3+(a*3); i++){
//                 for(let n=0+(x*3); n<3+(x*3); n++){
//                     if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//                     delete obj3[board[i][n]]
//                 }
//             }
//         }
//     }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=0; i<3; i++){
//     //     for(let n=0; n<3; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=3; i<6; i++){
//     //     for(let n=0; n<3; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=6; i<9; i++){
//     //     for(let n=0; n<3; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=0; i<3; i++){
//     //     for(let n=3; n<6; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=3; i<6; i++){
//     //     for(let n=3; n<6; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=6; i<9; i++){
//     //     for(let n=3; n<6; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=0; i<3; i++){
//     //     for(let n=6; n<9; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=3; i<6; i++){
//     //     for(let n=6; n<9; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     // var obj3 = {
//     //     1:0,
//     //     2:0,
//     //     3:0,
//     //     4:0,
//     //     5:0,
//     //     6:0,
//     //     7:0,
//     //     8:0,
//     //     9:0
//     // }
//     // for(let i=6; i<9; i++){
//     //     for(let n=6; n<9; n++){
//     //         if(!(board[i][n] in obj3) && board[i][n] !== ".") return false
//     //         delete obj3[board[i][n]]
//     //     }
//     // }

//     return true
// };

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let set1 = new Set();
    let set2 = new Set();
    for (let j = 0; j < 9; j++) {
      if (set1.has(board[i][j])) return false;
      if (set2.has(board[j][i])) return false;
      if (board[i][j] !== '.') set1.add(board[i][j]);
      if (board[j][i] !== '.') set2.add(board[j][i]);
    }
  }

  for (let width = 0; width < 3; width++) {
    for (let height = 0; height < 3; height++) {
      let set = new Set();
      for (let i = 0 + width * 3; i < 3 + width * 3; i++) {
        for (let j = 0 + height * 3; j < 3 + height * 3; j++) {
          if (set.has(board[i][j])) return false;
          if (board[i][j] !== '.') set.add(board[i][j]);
        }
      }
    }
  }

  return true;
};
