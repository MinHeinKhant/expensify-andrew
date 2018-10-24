const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Can only pass a single argument, otherwise use object
    resolve('This is my resolved data');
    resolve({
      name: 'AK',
      age: 34
    });

    // reject('Something went wrong');

    // In a promise, there can be ONE resolve or reject, 2nd one is ignored
    // resolve('This is my other resolved data');
  }, 3000);
});

console.log('before');

// If theres no catch reject will show up in JS error. With catch code will go on without encountering JS error.
promise
  .then(data => {
    console.log(data);
    return 'first promises return';
  })
  .then(str => {
    console.log('2nd:', str);
    return '2nd promise return';
  })
  .then(str => console.log('3rd: ', str))
  .catch(error => console.log('error:', error));

// Can use catch as a 2nd argument in then
// promise.then(
//   data => {
//     console.log(data);
//   },
//   error => {
//     console.log('error:', error);
//   }
// );

console.log('after');
