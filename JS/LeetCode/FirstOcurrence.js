const strStr = function (haystack, needle) {
  const isInclude = haystack.includes(needle);
  if (isInclude) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, needle.length + i) === needle) return i;
    }
  }
  return -1;
};
console.log(strStr("hello", "ll"));
