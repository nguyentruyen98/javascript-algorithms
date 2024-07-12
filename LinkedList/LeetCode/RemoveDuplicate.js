// *Ref: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);

console.log(list);

var removeDuplicates = function (head) {
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
};
console.log("hihi", removeDuplicates(list));
