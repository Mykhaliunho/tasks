

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

// function sumNumsInArrays(array1, array2) {
//     let sum = 0;
//     for (let i in array1) {
//       sum += array1[i];
//     }
//     let sum1 = 0;
//     for (let j in array2) {
//       sum1 += array2[j];
//     }
//     return sum1 + sum;
//   }
//   const arrayNums1 = [7, 101, 3, 1, 9, 11, 100, 111];
//   const arrayNums2 = [90, 101, 3, 1, 69, 11, 10, 111];
//   console.log(sumNumsInArrays(arrayNums1, arrayNums2));

// const arrayNums1 = [7,101,3,1,9,11,100,111];
// const arrayNums2 = [90,101,3,1,69,11,10,111];

//   function sumNumsInArrays (array1, array2) {
//       let sum = 0;
//       for (let n = 0; n < arrayNums1.length; n++) {
//           sum += arrayNums1[n];
//       }
//       let sum1 = 0;
//       for (let i = 0; i < arrayNums2.length; i++) {
//           sum += arrayNums2[i];
//       }
//       return sum + sum1;
//   }
//   console.log(sumNumsInArrays());

// const n = 20;
// for(let i = 2; i <= n; i--) {
//     i += n[i];
// }
// console.log(n);

// let i;
// for(i = 0; i < 20, i++;) {
//     return i
// };
// console.log(i);

// const n = 20;
// let i;
// for (let i = 0; i <= n; i++) {
    
// }
// console.log(i);

// console.log(n);
// let i;
// for(i = 1; i < 20; i++) {
//     i += + 1;
//     return i
// }
// console.log(i);

// function printEvenNumbers(n) {
//     let str;
//     for(let i = 1; i <= 20; i++) {
//         str = srt + i + 1;
//     } 
//     return srt;
    
// }
// console.log(printEvenNumbers());

// const arr = [ 43, "what", 9, true, "cannot", false, "be", 3, true ];

// function reverseArrayItems(array) {
//     let arr1 = [];
//     for (let i = 0; i > arr.length; i--) {
//         arr1.push(arr[i]);
//     }
//     return arr1;
// }
// console.log(reverseArrayItems());

// const n = 20;
// function printEvenNumbers(n)
//  {
//   let row = "";
//   for (let i = 1; i < n / 2; i++) {
//     row = row + 2 * i + ", ";
//   }
//   return row + n;
// }
// console.log(n);

// if (!array[i].includes("test")) {
//     result.push(array[i]);








function sayHello() {
    console.log('Hello')
}
// sayHello();


function sayHello(userFirstName, userLastName) {
    // console.log(userFirstName, userLastName);
    return userFirstName + ' ' + userLastName;
}
let resss = sayHello('Vovka', 'Mykhaliuno');
// console.log(`Hello ${res}!`);


let nums = 20;
function foo() {
    nums = 100;
    // console.log(nums);
    return nums;
    
}
// console.log(foo());
// foo();
// console.log(nums);


const newUser = {
    name: 'Vovka',
    age: 25
};

function getObj(obj) {
    console.log(obj);
}
// getObj(newUser);

const numArr = [22, 455, 35, 888, 921];
let value = numArr.length;
// console.log(value);
let value2 = Array.isArray(numArr);
// console.log(value2);
value = numArr.slice(2, 4);
// console.log(value);
// value = numArr.splice(3, 0, 'Hello');
// console.log(value);
// console.log(numArr);
value = numArr.reverse();
// console.log(numArr);


  
const nameArray = ['Vovka', 'Slavko', 'Magda', 'John'];

let newNameArray = [];
for (let i = 0; i < nameArray.length; i++) {
    newNameArray.push(nameArray[i].length);
} 
// console.log(newNameArray);
let newNameArray2 = [];
for (let i = 0; i < nameArray.length; i++) {
    newNameArray2.push(nameArray[i].toUpperCase());
}
// console.log(newNameArray2);

function mapArray(arr, fn) {
    let res = [];
    for (let i = 0; i < nameArray.length; i++) {
        res.push(fn(nameArray[i]));
    }
    return res;
}

function nameArrayLenght (el) {
    // console.log(el);
    return el;
}
const resArray = mapArray(nameArray, nameArrayLenght);
// console.log(resArray);

function greet(mainName) {
    return function (secondName) {
        return `hello ${mainName} ${secondName}`
    };
}

const testGreet = greet('Vovka');
console.log(testGreet);

const arrName = ['Vovka', 'Slavko', 'Magda']
console.log(arrName[2]);
console.log(arrName.length);

const animalObj = {
    name: 'Cat',
    age: 11,
    flexible: true
};
console.log(animalObj.flexible);
console.log(animalObj.flexible);