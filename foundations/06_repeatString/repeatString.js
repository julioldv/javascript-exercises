const repeatString = function(str, repetitions) {
    let output = "";

    if(repetitions < 0){return "ERROR"}

    for( let i = 0;i<repetitions;i++){
        output += str;
    }
    
    return output;
};

// Do not edit below this line
module.exports = repeatString;
