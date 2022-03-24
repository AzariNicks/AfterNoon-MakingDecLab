const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2])
    num3 = Number(tokens[3]);

    console.log('mathSymbol', mathSymbol);
    console.log('num1 is', num1);
    console.log('num2 is', num2)
    console.log('num3 is', num2)
        if (mathSymbol === ""){
        console.log("Math Symbol")};
        if (mathSymbol === "+"){
        console.log(num1 + num2 + num3);
  }     if (mathSymbol === "-"){
        console.log(num1 - num2 - num3);
    }   if (mathSymbol === "/"){
        console.log(num1 / num2 / num3);
}       if (mathSymbol === "*"){
        console.log(num1 * num2 * num3);
}       if (mathSymbol === "^"){
        console.log(num1 * num1),
        console.log(num2 * num2)
        if(num3 = ' '){}else{console.log("num 3 is" + num3)};
}      
        if (mathSymbol === "^^"){
            console.log(num1 * num1 * num1)
            console.log(num2 * num2 * num2)
            console.log(num3 * num3 * num3);
}       
        if (mathSymbol === "**"){
            console.log(Math.pow(num3, (Math.pow(num1, num2))))
}       

            if (mathSymbol === "%"){
                    console.log(num1 % num2 % num3) }


        if (mathSymbol === "Sq"){
        console.log(Math.sqrt(num1), + "   " + Math.sqrt(num2), + "  " +
        Math.sqrt(num3));
}
    reader.close()

})