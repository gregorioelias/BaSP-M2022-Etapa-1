//Exercise A

var text = 'underground';
console.log('ex_02_strings_A:', text.toUpperCase());

//Exercise B

var textStringTwo = 'friendship';
var firstFive = textStringTwo.substring(5, 0);
console.log('ex_02_strings_B:', firstFive);

//Exercise C

var textStringThree = 'motivation';
var lastThree = textStringThree.substring(7);
console.log('ex_02_strings_C:', lastThree);

//Exercise D

var textStringFour = 'everything';
var firstMayus = (textStringFour.substring(0, 1)).toUpperCase() + (textStringFour.substring(1)).toLowerCase();
console.log('ex_02_strings_D:', firstMayus);

//Exercise E

var textStringFive = 'beautiful strawberry';
var blankSpacePosition = textStringFive.indexOf(' ');
console.log('ex_02_strings_E:', blankSpacePosition);

//Exercise F

var textStringSix = 'additional performance';
var spacePosition = textStringSix.indexOf(' ');
var newString =
    (textStringSix.substring(0, 1)).toUpperCase() +
    (textStringSix.substring(1, spacePosition)).toLowerCase() + ' ' +
    (textStringSix.substring(spacePosition + 1, spacePosition + 2)).toUpperCase() +
    (textStringSix.substring(spacePosition + 2)).toLowerCase();
console.log('ex_02_strings_F:', newString);
