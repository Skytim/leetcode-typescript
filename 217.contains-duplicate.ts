/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let set = new Set()
    for (let num of nums) {
        if (set.has(num)) return true
        set.add(num)
    }
    return false
};
// @lc code=end

