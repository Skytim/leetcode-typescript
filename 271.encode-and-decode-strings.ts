/*
 * @lc app=leetcode.cn id=271 lang=typescript
 *
 * [217] Encode and Decode Strings
 */

// @lc code=start
/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    let result = ''
    for (let str of strs) {
        result += `${str.length}:${str}`
    }

    return result
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    let result: string[] = []
    let i = 0
    while (i < s.length) {
        let j = i
        while (s[j] !== ':') j++
        let len = Number(s.slice(i, j))
        result.push(s.slice(j + 1, j + 1 + len))
        i = j + 1 + len
    }
    return result
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

