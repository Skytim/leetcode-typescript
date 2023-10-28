/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    /// Approach 1
    let set = new Set()
    for (let num of nums) {
        if (set.has(num)) return true
        set.add(num)
    }
    return false
    /// Approach 2
     return nums.length !== new Set(nums).size
};

/// test
console.log(containsDuplicate([1,2,3,1]))
// @lc code=end

