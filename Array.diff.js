function arrayDiff(a, b) {
 arr3 = new Set (b);
  return a.filter( x=> !arr3.has(x))
}
