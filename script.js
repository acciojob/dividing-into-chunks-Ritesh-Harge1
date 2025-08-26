function divide(arr, n) {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      // push current chunk to result
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      // start new chunk
      currentChunk = [num];
      currentSum = num;
    }
  }

  // push last chunk if exists
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}

// Example usage
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); 
// [[1, 2], [3], [4, 1, 0], [2, 2]]

console.log(divide([4, 3, 2, 1], 4)); 
// [[4], [3], [2, 1]]

console.log(divide([2, -1, 3, 2], 4)); 
// [[2, -1, 3], [2]]

