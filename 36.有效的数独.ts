/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if(!isValid(board, i, j)) return false
            }

        }
    }
    return true
};

function isValid(board: string[][], i: number, j: number): boolean {
    let target = board[i][j]
    for (let k = 0; k < 9; k++) {
        /// 直&跳過自己
        if (k !== i && board[k][j] === target) return false
        /// 横&跳過自己
        if (k !== j && board[i][k] === target) return false
        /// i = 0~2 => m= 0 0 0 1 1 1 2 2 2
        let m = Math.floor(i / 3) * 3 + Math.floor(k / 3)
        /// j = 0~2 => n= 0 1 2 0 1 2 0 1 2
        let n = Math.floor(j / 3) * 3 + k % 3
        if (m !== i && n !== j && board[m][n] === target) return false
    }
    return true
}

// @lc code=end

