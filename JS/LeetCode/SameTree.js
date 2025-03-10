import { TreeNode } from "../../Data-Structures/Tree/Tree.js";

// ** https://leetcode.com/problems/same-tree/description/

const tree1 = new TreeNode(1, 2, 3);
const tree2 = new TreeNode(1, 2, 3);

const isSameTree = (p, q) => {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(tree1, tree2));
