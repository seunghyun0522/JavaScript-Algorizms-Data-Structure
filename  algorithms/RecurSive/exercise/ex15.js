function reverse(re) {
  if (re.length === 0) return re;
  return reverse(re.slice(1)) + re[0];
}
