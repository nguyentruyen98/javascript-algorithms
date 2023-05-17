// *Ref: https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const arrS = s.split("").sort();
//   const arrT = t.split("").sort();
//   for (let i = 0; i < arrS.length; i++) {
//     if (arrS[i] !== arrT[i]) return false;
//   }
//   return true;
// };
const a = isAnagram("!@#", "#@!");
console.log(a);
