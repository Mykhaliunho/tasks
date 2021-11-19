// let array = ['Vovka', 'Slavko', 'Magda'];
// console.log(array);

const array1 = [
    'Vovka',
    {
        type: 'JS',
        age: 5
    },
    true,
    function typeP(text) {
        return text;
    }
];
// console.log(array1);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(matrix);
// console.log(matrix[2][2]);
array1[0] = 'Slavko';
// console.log(array1);
array1.push('Vovka');
// console.log(array1);
array1.shift();
// console.log(array1);
array1.pop();
// console.log(array1);
array1.unshift('Slavko', 'Vovka');
// console.log(array1);


// const users = ['Slavko', 'Vovka', 'Magda', 'Steven'];

// delete users[3];
// console.log(users);
// console.log(users[3]);
// console.log(users);

// users.splice(3, 3);
// console.log(users);

// let remove = users.splice(3, 3);
// console.log(remove);

// users.splice(3, 0, 'John', 'Mathew');
// console.log(users);

// users.splice(-2, 2);
// console.log(users);


// const users = ['Slavko', 'Vovka', 'Magda', 'Steven'];

// let newUsers = users.slice(2, 3);
// console.log(newUsers);

//  let currUsers = users.slice(-3, -2);
//  console.log(currUsers);

// let newUsers = users.concat('John');
// console.log(users);
// console.log(newUsers);


const users = ['Slavko', 'Vovka', 'Magda', 'Steven'];
// console.log(users.indexOf('Mathew'));
// console.log(users.indexOf('Magda'));
// console.log(users.indexOf('Magda', 3));
console.log(users.includes('Vovka'));

// const films = [
//     {nameFilm: 'Home Alone', realese: 1990},
//     {nameFilm: 'Terminator', realese: 1998},
//     {nameFilm: 'Matrix', realese: 2002},
// ]

// let resultOne = films.find(function (item, index, array) {
//     return item.realese === 1998;
// });
// console.log(resultOne);
// let resultOne = films.find(item => item.realese === 1998);
// console.log(resultOne);

// let resultTwo = films.findIndex(item => item.realese === 2002);
// console.log(resultTwo);


const films = [
    {nameFilm: 'Home Alone', realese: 1990},
    {nameFilm: 'Terminator', realese: 1998},
    {nameFilm: 'Matrix', realese: 2002},
]
//  let result = films.filter(item => item.realese > 1995); 
//  console.log(result);


const stringsArray = [
  'one-test', 'cat', 'parrot',
  'banana', 'test-dog', 'dog'
]


function filterStringsArray(array) {
    let result = stringsArray.filter((array) => array !== 'test-dog' && array !== 'one-test');
    return result;
}


// function filterStringsArray(array) {
//     let newArray = stringsArray;
//     let result = newArray.filter((array) => array !== 'one-test' && array !== 'test-dog');
//     return result
// }
// console.log(filterStringsArray());

// const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// function reverseArrayItems(arr) {
//     let reverseArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reverseArr.push(arr[i]);
//     }
//     return reverseArr;
//   }
//   console.log(reverseArrayItems());




// const arrayNums = [7,101,3,1,9,11,100,111]
// function sortArray(array) {
//     array.sort((curr, next) => {
//         if (curr < next) {
//             return -1;
//         }
//     });
//     return array;
// };


// const nameUsers = ['Vovka', 'Magda', 'Alla', 'Slavko']
// console.log(nameUsers.sort());

const numsNumber = [4, 3, 6, 77, 35]

// function compareNumber (a, b) {
//     // console.log(`Compare ${a} and ${b}`);
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }
// console.log(numsNumber.sort(compareNumber));

// function compareNumber (a, b) {
//     return a - b
// }
// console.log(numsNumber.sort(compareNumber));

// const arrayNums = [7,101,3,1,9,11,100,111]
// function sortArray(array) {
//     array.sort((a, b) => a - b);
// }
// console.log(arrayNums);

const arrayNums = [7,101,3,1,9,11,100,111];
function sortArray(array) {
    array.sort((a, b) => {
          if (a < b) {
            return -1;
             }
          });
          return array;
  }
const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

function printEvenNumbers(n) {
    let str = [];
    for (let i = 1; i <= 20/2; i++) {
      str = str + 2 * i + ', ';
    }
    return str;
  }

  console.log(printEvenNumbers(n));

// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

// function printEvenNumbers(n) {
//     let str = "";
//     for (let i = 1; i < n / 2; i++) {
//       str = str + 2 * i + ", ";
//     }
//     return str;
//   }
//   console.log(printEvenNumbers(n));
  
