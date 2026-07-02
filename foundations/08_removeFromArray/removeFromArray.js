const removeFromArray = function(array, ...itemsToRemove) {
    const result = array.filter(item => !itemsToRemove.includes(item))
    return result;
}; 

// Do not edit below this line
module.exports = removeFromArray;
