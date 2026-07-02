const fibonacci = function(number) {
    //First we make some validations
    let fibo = Number(number);

    if(fibo < 0){
        return "OOPS";
    }

    //Recursive fibonacci sequence
    // if(fibo < 2){
    //     return fibo;
    // }else{
    //     return fibonacci(number-1) + fibonacci(number-2);
    // }

    //Iterative fibonacci 

    let previous = 0;
    let current = 1;
    let next = 0;

    for(let i = 2; i <= fibo; i++){
        next = previous + current;
        previous = current;
        current = next;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
