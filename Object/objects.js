// Об'єкти

// const film = {
//     name: 'Home alone',
//     dataRelease: 1990,
//     director: 'Chris Colombus',
//     mainCharacter: 'Macaulay Culcin'
// };
// console.log(film);

// const newRow = 'writter';
// film[newRow] = 'John Hughes'
// console.log(film)

// if (film.dataRelease === 1990 && film.director === film.writter) {
//     console.log('Error')
// } else {
//     console.log('Congratulation')
// };


// delete film.director;
// console.log(film);

// console.log(film.hasOwnProperty('dataRelease'));

// console.log(film.toString());



const footballPlayer = {
    firstName: 'Volodya',
    lastName: 'Mykhaliuno',
    number: 10,
    hasWarning: true,
};

console.log(footballPlayer);

const basketballPlayer = Object.assign({}, footballPlayer);

basketballPlayer.lastName = 'O,Neil';
basketballPlayer.hasWarning = false;
console.log(basketballPlayer);

Object.freeze(basketballPlayer);

console.log(Object.isFrozen(basketballPlayer));


