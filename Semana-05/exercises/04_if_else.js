//Exercise A

var randomNum = Math.random();
var messageOne;
if (randomNum >= 0.5) {
    messageOne = 'ex_04_if_else_A: ' + randomNum + ' is Greater than 0.5';
    alert(messageOne);
} else {
    messageOne = 'ex_04_if_else_A: ' + randomNum + 'is Lower than 0.5';
    alert(messageOne);
}

//Exercise B

var age = Math.floor(Math.random() * 100);
var messageTwo;
if (age < 2){
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Bebe';
    alert(messageTwo);
} else if (age >= 2 && age <= 12) {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Niño';
    alert(messageTwo);
} else if (age >= 13 && age <= 19) {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Adolescente';
    alert(messageTwo);
} else if (age >= 20 && age <= 30) {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Joven';
    alert(messageTwo);
} else if (age >= 31 && age <= 60) {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Adulto';
    alert(messageTwo);
} else if (age >= 61 && age <= 75) {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Adulto Mayor';
    alert(messageTwo);
} else {
    messageTwo = 'ex_04_if_else_B: edad: ' + age + ' Anciano';
    alert(messageTwo);
}
