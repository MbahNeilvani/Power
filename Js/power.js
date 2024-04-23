// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

function numToPower(number,power){
    let total = 1;
    for (let i = 1; i <= power; i++){
        total = total * number;
    }

    return total;
}

