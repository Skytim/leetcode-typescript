/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let set =  new Set(nums);
    return set.size !== nums.length;
};

/// test 1
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
// @lc code=end

