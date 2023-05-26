//* Ref: https://leetcode.com/problems/group-anagrams/

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  let result = [];
  result = strs.reduce((r, a) => {
    const key = a.split("").sort().join("");
    r[key] = r[key] || [];
    r[key].push(a);
    return r;
  }, Object.create(null));

  return Object.values(result);
}
export { groupAnagrams };
