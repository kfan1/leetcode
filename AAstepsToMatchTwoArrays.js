/**
 * given two arrays
 * ['A', 'B', 'C', 'D', 'E', 'F', 'G'] and ['A', 'B', 'D', 'E', 'F', 'F', 'H']
 * return this ['A', 'B', '-C', 'D', 'E', 'F', '+F', '-G', '+H']
 *
 * ['A', 'B', 'C', 'D', 'E', 'F', 'G'] and ['A', 'B', 'E', 'F', 'X', 'G', 'X']
 * return this ['A', 'B', '-C', '-D', 'E', 'F', '+X', 'G', '+X']
 *
 * ['A', 'B', 'C', 'D', 'E', 'F', 'G'] and ['A', 'B', 'G', 'C', 'D', 'E', 'F']
 * return this ['A', 'B', '+G', 'C', 'D', 'E', 'F', '-G']
 */

// function minMoves()
