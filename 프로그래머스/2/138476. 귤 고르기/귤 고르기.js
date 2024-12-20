function solution(k, tangerine) {
  const countMap = new Map();
  for (const size of tangerine) {
    countMap.set(size, (countMap.get(size) || 0) + 1);
  }

  const sortedCounts = [...countMap.values()].sort((a, b) => b - a);

  let total = 0;
  let types = 0;

  for (const count of sortedCounts) {
    total += count;
    types++;
    if (total >= k) break;
  }

  return types;
}
