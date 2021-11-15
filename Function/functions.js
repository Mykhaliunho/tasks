

// function sayHelloWorld(text) {
//     return text;
// };
// console.log(sayHelloWorld("Hello world"));


// function sayHello(name) {
//     return name;
// }
// console.log(sayHello('Hello Volodya'));


// function sumNumbers(a, b) {
//     return a + b;
// }
// console.log(sumNumbers(40, 60));


// function valueByKeyInObject(key, obj = {}) {

//     return obj['key'];
// }
// console.log(valueByKeyInObject());


// function valueByKeyInObject(key, obj = {}) {

//     return key;
// }
// valueByKeyInObject({});
// console.log('Name');


// const users = [1, 2, 3, 4];
// console.log(users);
// users.push('rararara');
// console.log(users);
// users.shift();
// // console.log(users);
// users.unshift('hahaha');
// console.log(users);

// const nums = [1, 2];
// console.log(nums);
// nums.push(3, 4, 5, 6)
// console.log(nums);


// function greeting(lastName) {
//     return function (firstName) {
//         return `Hello ${firstName} ${lastName}`;
//     };
// }

// const fullName = greeting('Mykhaliuno')('Volodymyr');
// console.log(fullName);


// function question(job) {
//     const jobDictionary = {
//         developer: 'what is JavaScript?',
//         teacher: 'what subject do you teach?'
//     };

//     return function(name) {
//         return `${name}, ${jobDictionary[job]}`;
//     };
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Vovka'));


// function question(film) {
//     const filmDictionary = {
//         homeAlone: 'Interested movie',
//         harryPotter: 'Boring movie'
//     };
//     return function(sound) {
//         return `${sound}, ${filmDictionary[film]}`
//     };
// }

// const filmSound = question('harryPotter')
// console.log(filmSound('uuuuuuuu'))

// const plus = (x, y) => x + y;
// // console.log(plus(4, 4));
// let res = plus(5, 5);
// console.log(res);

// const returnObj = (str = '') => {
//     return {
//         value: str,
//         length: str.length,
//     };
// };
// console.log(returnObj('hello slavko'))

// function increase(a, b) {
//     const x = 100;
//     if (a > b) {
//         return a + x
//     } else if (a < b) {
//         return b + x
//     }
// }
// console.log(increase(10, 7));
// console.log(increase(10, 77));
