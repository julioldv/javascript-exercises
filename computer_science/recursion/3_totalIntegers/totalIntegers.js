const totalIntegers = function(input) {

    let integerCounter = 0;

    if(typeof input !== "object" || input === null) return undefined;

    for (const element of Object.values(input)) {
        if (typeof element === "number" && Number.isInteger(element)){
            integerCounter++;
        }else if(element !== null && typeof element === "object"){
            integerCounter += totalIntegers(element);
        }
    }
    return integerCounter;
};
  
// Do not edit below this line
module.exports = totalIntegers;
