let outputNumber = [];
let basesConverter = [2, 8, 16];

let digits;
function receiveNumber() {
    let inputNumber = document.getElementById("inputNumber");
    inputNumber = inputNumber.value.toString();
    digits = inputNumber.split('');
    let base = document.getElementById("base");
    if (base.value != 10) {
        inputNumber = toDecimal(digits, base.value);
        console.log(inputNumber);
    }
    else {

    }
    fromDecimal(inputNumber);
}

function toDecimal(digits, base) {
    digits.reverse();
    let i = 0;
    let numDecimal = 0;
    if (base > 10) {
        digits.forEach(replaceChar)
    }
    for (digit of digits) {
        numDecimal = numDecimal + digit * Math.pow(base, i);
        i++;
    }
    return numDecimal;
}
function fromDecimal(num) {
    outputNumber = [];
    for (base of basesConverter) {
        while (num >= base) {
            outputNumber.push(num % base);
            num = Math.floor(num / base);
            if (num < base) {
                outputNumber.push(num);
            }
            console.log("quociente: " + num);
            console.log("resto: " + outputNumber);
        }
    }
}
function replaceChar(digit) {
    let modChar = digit.toUpperCase();
    switch (modChar) {
        case "A":
            digits.splice(digits.indexOf(digit), 1, 10);
            break;
        case 'B':
            digits.splice(digits.indexOf(digit), 1, 11);
            break;
        case "C":
            digits.splice(digits.indexOf(digit), 1, 12);
            break;
        case 'D':
            digits.splice(digits.indexOf(digit), 1, 13);
            break;
        case "E":
            digits.splice(digits.indexOf(digit), 1, 14);
            break;
        case 'F':
            digits.splice(digits.indexOf(digit), 1, 15);
            break;
    }
}