const contains = function (object, value) {
  // For each value inside the object:
  for (const currentValue of Object.values(object)) {
    // If the value is equal to the target:
    if (Object.is(currentValue, value)) {
      // return true
      return true;
    }

    // If the value is another object:
    if (currentValue !== null && typeof currentValue === "object") {
      // Search inside that object.
      // If that search returns true:
      if (contains(currentValue, value)) {
        // return true
        return true;
      }
    }
  }

  // After checking everything:
  // return false
  return false;
};
// Do not edit below this line
module.exports = contains;
