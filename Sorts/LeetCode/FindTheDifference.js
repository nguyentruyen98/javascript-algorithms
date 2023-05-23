// *Ref: https://leetcode.com/problems/find-the-difference/

function findTheDifference(s, t) {
  let totalCharCode = 0;
  for (var i = 0; i < t.length; i++) {
    totalCharCode += t.charCodeAt(i);
    if (s.charCodeAt(i)) {
      totalCharCode -= s.charCodeAt(i);
    }
  }
  return String.fromCharCode(totalCharCode);
}

export { findTheDifference };
findTheDifference("abcd", "abcde");
