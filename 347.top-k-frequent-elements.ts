/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {

    const map: { [key: number]: number } = {};
    nums.forEach(num => {
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    })

    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => Number(item[0]))
};
// @lc code=end

