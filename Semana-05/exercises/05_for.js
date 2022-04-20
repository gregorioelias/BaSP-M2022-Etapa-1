//Exercise A

var words = ['bike', 'dog', 'car', 'cat', 'people'];
for (var index = 0; index < words.length; index++) {
    var message = 'ex_05_for_A: ' + index + ': ' + words[index];
    alert(message);
}

//Exercise B

for (var index = 0; index < words.length; index++) {
    var element = words[index].substring(0, 1).toUpperCase() + words[index].substring(1);
    var message = 'ex_05_for_B: ' + index + ': ' + element;
    alert(message);
}

//Exercise C

var sentence = '';
for (var index = 0; index < words.length; index++) {
    var sentence = sentence + words[index] + ' ';
}
var messageTwo = 'ex_05_for_C: ' + sentence;
alert(messageTwo);

//Exercise D

var emptyArray = [];
for (let index = 0; index < 10; index++) {
    emptyArray[index] = index;
}
console.log('ex_05_for_D:', emptyArray);
