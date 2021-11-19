// let sum = 0;

// for ( let i = 0; i < 6; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// const nums = [1, 1, 1, 1, 1, 1];
// let sum = 5 ** 3;
// for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
// }
// console.log(sum);

// const arr = [{name: 'Vovka', age: 25}, {name: 'Slavko', age: 24}];
// let sumArray;
// for (let index = 0; index <= arr.length; index++) {
//     sumArray += arr[index];
// }
// console.log(sumArray);

// const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
// let sentence = '';
// for (let i = 0; i < words.length; i++) {
//     sentence = sentence + words[i] + ' ';
// }
// console.log(sentence);

// const nums = [6, 5, 4, 3, 2, 1]
// let sentence = '';
// for (let i = nums.length - 1; i >= 0; i--) {
//     sentence = sentence + nums[i] + ' ';
// }
// console.log(sentence);

// const obj = {
//     one: 'Home Alone',
//     two: 'Car Run Away',
//     third: 'Rodcom'
// };
// let sentence = '';
// const result = [];
// for (let key in obj) {
//     sentence = sentence + obj[key] + '; ';
//     result.push(obj[key]);
// }
// console.log({result, sentence});


// let x = 3;
// let sum = 0;
// while (x <= 3) {
//     sum = sum + x;
//     x++;
// }
// console.log('sum ', sum);

// const matrix = [
//     ['Slavko', 'Vovka', 'Magda'],
//     [1, 2, 3],
//     [true, false, true],
// ]
// for (let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// const nums = [1, 2, 3, 4, 5, 6];
// let n = 4;
// let sum = 10;
// while (n < nums.length) {
//     sum += nums[n];
//     n++;
// }
// console.log(sum);

// const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
// let index = 0;
// let sentence = '';
// while (index < words.length) {
//     sentence = sentence + words[index] + ' ';
//     index++;
// }

// console.log(sentence);

// let arr = [1, 2, 3];
// console.log(arr);
// arr.length = 2;
// console.log(arr);
// let newArr = arr;
// newArr.length = 2;
// console.log(newArr);

// const users = [
//     {
//         name: 'Borys',
//         age: 101,
//     }
// ];

// users[0].name = 'Dmytro';
// users[0].age = 18;

// console.log(users);

// const nums = [1, 2,]
// console.log(nums);
// nums.push(3, 4, 5, 6);
// console.log(nums);


// const nums = [1, 2, 3, 4, 5,];
// console.log(nums);
// nums.shift();
// nums.shift();
// console.log(nums);

// let nums = [1, 2, 3, 4,]
// let reduceValue = nums.reduce(function(previousValue, item, index, array) {
//     return item + previousValue;
// }, 0);
// console.log(reduceValue);

// const arrayNums1 = [7,101,3,1,9,11,100,111] 
// const arrayNums2 = [90,101,3,1,69,11,10,111] 


// let array1 = 0;
// for (let i = 0; i < arrayNums1.length; i++) {
//     array1 += arrayNums1[i];
// }

// let array2 = 0;
// for (let n = 0; n < arrayNums2.length; n++) {
//     array2 += arrayNums2[n];
// }

// return array1 + array2;


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


const stringsArray = ['one-test', 'cat', 'parrot', 'banana', 'test-dog', 'dog'];
   function filterStringsArray(array) {
       let array1 = stringsArray;
      array1.filter((array1) => array1 !== "one-test" && array1 !== "test-dog");
      return array;
    }
    console.log(filterStringsArray(array));

    
  
  
  