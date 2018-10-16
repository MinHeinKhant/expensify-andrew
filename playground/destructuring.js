// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(firstName, age);

// const { city, temp: temperature } = person.location;
// console.log(city, temperature);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName);

const address = ['1233 Junior Street', 'Philadelphia', 'Pennsylvania', 19147];

const [, city, state = 'New York'] = address;
console.log(city, state);
