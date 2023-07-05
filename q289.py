class Solution(object):
  def gameOfLife(self, board):
    """
    :type board: List[List[int]]
    :rtype: None Do not return anything, modify board in-place instead.
    """
    directions = [[1, 1], [1, 0], [1, -1], [0, 1], [0, -1], [-1, 1], [-1, 0], [-1, -1]]
    
    newBoard = []
    
    for n in range(len(board)):
      newRow = []
      for m in range(len(board[0])):
        numberAlive = 0
        for direction in directions:
          if n + direction[0] >= 0 and m + direction[1] >= 0 and n + direction[0] < len(board) and m + direction[1] < len(board[0]):
            if board[n + direction[0]][m + direction[1]] == 1:
              numberAlive += 1

        if numberAlive < 2:
          newRow.append(0)
        elif numberAlive > 3:
          newRow.append(0)
        elif numberAlive == 3 and board[n][m] == 0:
          newRow.append(1)
        elif (numberAlive == 2 or numberAlive == 3) and board[n][m] == 1:
          newRow.append(1)
        else:
          newRow.append(0)
          
      newBoard.append(newRow)
    
    for n in range(len(board)):
      board[n] = newBoard[n]      
          
        
        
test = Solution()
test.gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])