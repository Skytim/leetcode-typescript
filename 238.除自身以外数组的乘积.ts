/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    /// original solution
    let left: number[] = [];
    let right: number[] = [];
    let result: number[] = [];
    left[0] = 1;
    right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    return result;

    // let result: number[] = [];
    // result[0] = 1;
    // for (let i = 1; i < nums.length; i++) {
    //     result[i] = result[i - 1] * nums[i - 1];
    // }
    // let right = 1;
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     result[i] = result[i] * right;
    //     right *= nums[i];
    // }

    // return result;
};
// @lc code=end

