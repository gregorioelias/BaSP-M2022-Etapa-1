//Exercise A

const sumA = function(a, b) {
    return a + b;
}
const resultA = sumA(5, 6);
console.log('ex_06_functions_A:', resultA);

//Exercise B

const sumB = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('This is not a number!');
        return NaN;
    }
    return a + b;
}
const resultB = sumB(5, 'example');
console.log('ex_06_functions_B:', resultB);

//Exercise C

const validateInteger = function(num) {
    if (Number.isInteger(num)) {
        return true;
    }
}
console.log('ex_06_functions_C:', validateInteger(5));

//Exercise D

const sumD = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('This is not a number!');
        return NaN;
    }
    if (!Number.isInteger(a)) {
        alert('The number ' + a + ' is not integer.');
        return Math.round(a);
    } else if (!Number.isInteger(b)) {
        alert('The number ' + b + ' is not integer.');
        return Math.round(b);
    }
    return a + b;
}
const resultD = sumD(5, 5.5);
console.log('ex_06_functions_D:', resultD);

//Exercise E

const integerValidation = function(a, b) {
    if (!Number.isInteger(a)) {
        alert('The number ' + a + ' is not integer.');
        return Math.round(a);
    } else if (!Number.isInteger(b)) {
        alert('The number ' + b + ' is not integer.');
        return Math.round(b);
    }
}

const sumE = function(a, b) {
    integerValidation(a, b);
    return a + b;
}

const resultE = sumE(5, 6.8);
console.log('ex_06_functions_E:', resultE);