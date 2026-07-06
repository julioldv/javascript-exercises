const permutations = function (array) {
  // Base case:
  // The empty array has exactly one permutation: itself.
  if (array.length === 0) {
    return [[]];
  }

  const result = [];

  // Try each element as the first element of the permutation.
  for (let i = 0; i < array.length; i++) {
    const fixedElement = array[i];

    // Create a new array without the fixed element.
    const remainingElements = [
      ...array.slice(0, i),
      ...array.slice(i + 1),
    ];

    // Recursively get every permutation of the remaining elements.
    const smallerPermutations = permutations(remainingElements);

    // Attach the fixed element to every smaller permutation.
    for (const permutation of smallerPermutations) {
      result.push([fixedElement, ...permutation]);
    }
  }

  return result;
};
  
// Do not edit below this line
module.exports = permutations;
