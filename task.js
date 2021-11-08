// типи даних і перевірка типів даних




// String

const userName = 'Volodymyr';
console.log(userName);
console.log(typeof userName);

const firstName = 'Volodymyr';
const lastName = 'Mykhaliuno';
let age = 25;
let text = `Your name ${firstName} your lastname ${lastName} and age ${age}`;
console.log(text);
console.log(typeof text);

let row = 'Sometimes I play football';
console.log(row);
console.log(row.toUpperCase());
console.log(row.toLowerCase());
console.log(row.charAt(4));
console.log(row.length);
console.log(row.indexOf('play'));

row = row.replace('football', 'basketball');
console.log(row);

let years = '25';
console.log(years);



// Number

let birthDay = 1995;
console.log(birthDay);
console.log(typeof birthDay);

let curretnYear = '2021';
console.log(typeof Number(curretnYear));




//Undefined

let surName;
console.log(surName);




//Null

let youMarried = null;
console.log(youMarried);



//boolean

let x = true;
console.log(x);
console.log(typeof x);

let a = 25;
let b = '25';
 console.log(a == b);
 console.log(a === b);

let unknown = 5 > 4;
console.log(unknown);




// Оператори присвоєння і порівняння

let user = 5 ;
console.log(user + 5);
console.log(user - 3);

user *= 5;
console.log(user);
user += 16;
console.log(user);
user -= 3;
console.log(user);

let ticketOne = 20;
let ticketTwo = 25;
console.log(ticketOne < ticketTwo);
console.log(ticketOne <= ticketTwo);
console.log(ticketOne == ticketTwo);
console.log(ticketOne === ticketTwo);
console.log(ticketOne !== ticketTwo);




//Логічні та оператори типів

const A = 10;
const B = 15;
let C = 'example';

console.log(a || C);
console.log(null || B);
console.log(null || C);
console.log(null || C || A);

let currentUser = 5;
let newUser = 6;
currentUser> newUser || newUser++;
console.log(newUser);

let userUser = 3;;
(user > 2) && console.log(`User ${userUser}`);





// Умовні конструкції

let first = 10;
let second = 15;
let message = 'Hello Volodya';

if ( first > second) {
    console.log('Error');
} else if (first > 100 ) { 
    console.log('You looser');
} else if (first < second) {
    console.log(message);
} else {
    console.log('Exactly');
}



let messageStart = 'Hello';
let messageEnd = (40 > 35) ? 'Volodya' : 'Slavko';

messageStart += messageEnd;
console.log(message);

let salary = 900, position;
switch(salary) {
    case 900: position = 'Frontend'; break;
    case 1000: position = 'QA'; break;
    case 1100: position = 'Backend'; break;
    default: position = 'PM';
}
console.log(position)


