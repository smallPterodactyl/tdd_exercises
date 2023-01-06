
//Mapping for Roman-decimal or decimal-Roman conversions
export const numberMapping = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1  
}


export function decimalToRoman (number) {
  if ((number === undefined)) {throw new Error("Integer > 0 and < 2999 required")};
  if ((number === 0)) {throw new Error("Integer > 0 and < 2999 required")};
  //if ((number > 2999)) {throw new Error("Integer > 0 and < 2999 required")};

  let strRoman = '';              //Output string
  let workingTotal = number;      //The input decimal will be successively decremented
        
    //Loop through the array of Roman-decimal pairs
    Object.entries(numberMapping).forEach (([currentRomanNum, currentdecimalNum]) => {

      //Compare the input decimal to the number in the pair
      while (workingTotal >= currentdecimalNum) {

        //Write the Roman numberal to the string; then decrement the input decimal
        strRoman += currentRomanNum;
        workingTotal -= currentdecimalNum;

      }
    });

    return (strRoman);
}


 export const RomanToDecimal = (Roman) => {
        
    let previousNumber = 0;

   //This function compares current and previous numerals in a Roman numeral string, calculating what they add to a decimal total.
   // If the previous number is < current number (e.g. I < V), we must subtract the previous number twice from the cumulative total:
   // once because it was added in the previous pass (e.g. 1), a second time to arrive at the correct value (e.g. 5 - 1 = 4).

    const compareNumbers = (num) => {

      let numberToAdd = 0;
      num > (previousNumber) && (previousNumber !== 0) ? numberToAdd = (num - (2 * previousNumber)) : numberToAdd = num;
      previousNumber = num;
      return numberToAdd;

    }        

    //The reduce function adds up the decimal value of each Roman character, calling a function to use subtractive logic as needed
    return [...Roman].reduce ((workingTotal, RomanNumeral) =>  workingTotal + (compareNumbers(numberMapping[RomanNumeral])),0 );
  
 } 



