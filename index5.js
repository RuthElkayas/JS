function extractNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    return arr.filter(item => typeof item === 'number' && !Number.isNaN(item));
}

function sumNumbersSafe(arr) {
    try {
        const validNumbers = extractNumbers(arr);
        
        return validNumbers.reduce((sum, num) => sum + num, 0);
    } catch (error) {
        console.warn("Warning: Invalid input passed to sumNumbersSafe");
        return 0;
    }
}

function filterLargeSums(arrList, minTotal) {
    if (!Array.isArray(arrList)) {
        throw new Error("Input must be an array of arrays");
    }
    return arrList.filter(subArr => {
        const total = sumNumbersSafe(subArr);
        return total >= minTotal;
    });
}


function summaryStats(arrList) {
    const validSubArrays = filterLargeSums(arrList, 10);
    
    return validSubArrays.map(subArr => {
        const validNumbers = extractNumbers(subArr);
        const sum = sumNumbersSafe(subArr);
        const average = validNumbers.length > 0 ? sum / validNumbers.length : 0;
        
        return { sum, average };
    });
}

function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new Error("Arguments must be of the exact same type");
    }
    
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) throw new Error("Division by zero is not allowed");
            return a / b;
        default:
            throw new Error("Invalid operation");
    }
}

console.log ( extractNumbers(['vjy',6,9]));
console.log(sumNumbersSafe([89,98,7]));
console.log(filterLargeSums([[45,87,65],[98,9,8],[9,8,7]],60));
console.log(summaryStats([[45,87,65],[98,9,8],[9,8,7]]));
console.log(safeCalculator(2,9,'*'));