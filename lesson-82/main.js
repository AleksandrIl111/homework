function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("World"));



function printNumbersGreaterThanTen(arr) {
    for (let num of arr) {
        if (num > 10) {
            console.log(num);
        }
    }
}

let numbers = [5, 12, 8, 15, 3, 20];
printNumbersGreaterThanTen(numbers);



function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error! Division by zero.";
            }
        default:
            return "Invalid operator.";
    }
}

let result = calculator(2, 3, 'minus');
console.log(result); // -1

result = calculator(2, 3, 'plus');
console.log(result); // 5

result = calculator(2, 3, 'multiply');
console.log(result); // 6

result = calculator(2, 3, 'divide');
console.log(result);

result = calculator(2, 0, 'divide');
console.log(result);