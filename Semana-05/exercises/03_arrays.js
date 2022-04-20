//Exercise A

var months = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];

console.log('ex_03_arrays_A:', months[4]);
console.log('ex_03_arrays_A:', months[10]);

//Exercise B

console.log('ex_03_arrays_B:', months.slice().sort());

//Exercise C

months.unshift('First element');
months.push('Last element');
console.log('ex_03_arrays_C:', months);

//Exercise D

months.shift();
months.pop();
console.log('ex_03_arrays_D:', months);

//Exercise E

console.log('ex_03_arrays_E:', months.slice().reverse());

//Exercise F

console.log('ex_03_arrays_F:', months.join(' - '));

//Exercise G

var sliceMonth = months.slice(4, 11);
console.log('ex_03_arrays_G:', sliceMonth);
