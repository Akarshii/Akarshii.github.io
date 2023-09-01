const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function Words(number) {
    if (number === 0) {
        console.log("Zero");
        return;
    } else if (number < 0) {
        console.log("Minus ");
        number = -number;
    }

    if (number >= 1000) {
        console.log(`${ones[Math.floor(number / 1000)]} thousand `);
        number %= 1000;
    }

    if (number >= 100) {
        console.log(`${ones[Math.floor(number / 100)]} hundred `);
        number %= 100;
    }

    if (number >= 20) {
        console.log(`${tens[Math.floor(number / 10)]} `);
        number %= 10;
    } else if (number >= 10) {
        console.log(`${teens[number - 10]} `);
        return;
    }

    if (number > 0) {
        console.log(`${ones[number]} `);
    }
}

function main() {
    let number = parseInt(prompt("Enter a number: "));
    console.log("Number in words: ");
   Words(number);
}

main();
