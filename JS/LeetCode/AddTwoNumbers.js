// ** https://leetcode.com/problems/add-two-numbers/description/

import { ListNode } from "../../Data-Structures/LinkedList/LinkedList.js";
const filterArrayToListNode = (array) => {
  if (array.length === 0) return null;
  return new ListNode(array[0], filterArrayToListNode(array.slice(1)));
};

var addTwoNumbers = function (l1, l2) {
  let num1 = [];
  let num2 = [];

  while (l1) {
    num1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    num2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let result = [];
  let i = 0,
    j = 0;

  while (i < num1.length || j < num2.length || carry) {
    let sum = (num1[i] || 0) + (num2[j] || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i++;
    j++;
  }

  return filterArrayToListNode(result);
};

const node1 = filterArrayToListNode([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const node3 = filterArrayToListNode([5, 6, 4]);
console.log(addTwoNumbers(node1, node3));
console.log(node1, node3);
