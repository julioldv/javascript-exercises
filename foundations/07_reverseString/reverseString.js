const reverseString = function(phrase) {
    let reversed = "";

    for (let i = phrase.length - 1; i >= 0; i--){
        reversed += phrase.charAt(i);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
