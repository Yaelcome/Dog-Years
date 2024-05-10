//use JavaScript to convert your human age into dog years.
const myAge = 23 ;

//Note, the value saved to this variable will change.
let earlyYears = 2;
console.log(earlyYears); 

earlyYears*= 10.5;
console.log(earlyYears); 

//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
laterYears = myAge - 2;
console.log(laterYears)

//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *=  4;
console.log(laterYears);

//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//write my name as a string and turn it into loweracase and store the result as a variable called myName
var myName = 'Yael Fuertes';
'Yael Fuertes'.toLowerCase()
console.log('Yael Fuertes'.toLowerCase());

//final output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years`);
