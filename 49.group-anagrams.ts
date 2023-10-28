/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start

function sortString(str: string): string {
    return str.split('').sort().join('');
}

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const sortedStr = sortString(str);
        const anagrams = map.get(sortedStr);
        if (anagrams) {
            anagrams.push(str);
            map.set(sortedStr, anagrams);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
};
// @lc code=end

