// *Ref: https://leetcode.com/problems/merge-two-sorted-lists/
import { LinkedList } from "../../Data-Structures/LinkedList/LinkedList.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeSortedList = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeSortedList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeSortedList(list1, list2.next);
    return list2;
  }
};

console.log(mergeSortedList(list1, list2));
