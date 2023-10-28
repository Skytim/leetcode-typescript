/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
    if (l1 || l2) {
        const sum = getNodeValue(l1) + getNodeValue(l2) + carry
        const nextCarry = sum >= 10 ? 1 : 0
        const next1 = getNextNode(l1)
        const next2 = getNextNode(l2)
        return new ListNode(sum % 10, addTwoNumbers(next1, next2, nextCarry))
    } else if (carry) {
        return new ListNode(1)
    }
    return null
};

function getNodeValue(node: ListNode | null): number {
    return node && node.val ? node.val : 0
}

function getNextNode(node: ListNode | null): ListNode | null {
    return node && node.next ? node.next : null
}

/// test
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

const result = addTwoNumbers(l1, l2)
console.log(result)

// @lc code=end

