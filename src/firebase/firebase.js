import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDe_LbnvI1Crlc3cbi8pVXheOdpxd0jixo',
  authDomain: 'expensify-andrew.firebaseapp.com',
  databaseURL: 'https://expensify-andrew.firebaseio.com',
  projectId: 'expensify-andrew',
  storageBucket: 'expensify-andrew.appspot.com',
  messagingSenderId: '397974925733'
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// Trigger once for initial existing data and then for adding new ones
// database.ref('expenses').on('child_added', snapshot => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// const expenses = [
//   {
//     description: 'Rent',
//     note: '',
//     amount: 189500,
//     createdAt: 12654456213
//   },
//   {
//     description: 'Phone Bill',
//     note: '',
//     amount: 9500,
//     createdAt: 12654456213
//   },
//   {
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 12654456213
//   }
// ];

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     asfd213j: {
//       title: 'first note',
//       body: 'my first note'
//     },
//     jklsdfajksadfkj: {
//       title: 'first note',
//       body: 'my first note'
//     }
//   }
// };

// const notes = [
//   {
//     id: '12',
//     title: 'first note',
//     body: 'my first note'
//   },
//   {
//     id: '62',
//     title: 'second note',
//     body: 'my second note'
//   }
// ];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// });

// ---------on() subscribe for every changes------------
// Can set to a variable because callback func returns a func
// Use a callback func to run whenever it changes
// const onValueChange = database
//   .ref()
//   .on(
//     'value',
//     snapshot => console.log(snapshot.val()),
//     e => console.log('Error with data fetching ', e)
//   );

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500);

// -------------once() subscribe for once-----------------

// promises can only ever be resolved or rejected a single time with a single value
// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   });

// -------set()------------

// database
//   .ref()
//   .set({
//     name: 'AK',
//     age: 33,
//     stressLevel: 6,
//     job: {
//       title: 'Software devloper',
//       company: 'Google'
//     },
//     location: {
//       city: 'Ygn',
//       country: 'Mym'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => console.log('This failed: ', e));

// Overwrite {} with this
// database.ref().set('This is my database')

// Overwrite {} with age: 34
// database.ref().set({age: 34})

// Just update age
// database.ref('age').set(34);
// database.ref('location/city').set('Mdy');

// ------------------------------

// database
//   .ref('attributes')
//   .set({
//     height: 300,
//     width: 400
//   })
//   .then(() => console.log('Second set call work'))
//   .catch(e => console.log('Things didnt work for the second error: ', e));

// -----------ref()------------
// database.ref()  roof of the database
// database.ref('name')
// database.ref('location/city')

// -------------remove()-----------------

// remove
// passing null for the new value is equivalent to calling remove()
// database.ref('isSingle').set(null);

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => console.log('Data was removed'))
//   .catch(e => console.log('Didnt remove data', e));

// -------------update()------------------

// database.ref().update({
//   name: 'Mike',
//   age: 55,
//   job: 'Software dev',
//   isSingle: null
// });

// When we update nested object like location, this will set location to only city, we lost country
// database.ref().update({
//   job: 'Manager',
//   location: {
//     city: 'Boston'
//   }
// });

// Correct way to update nested object
// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// });

// change stressLevel to 9
// change job.company to Amazon
// Change location.city to Seattle

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
