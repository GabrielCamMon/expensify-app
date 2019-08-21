import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

//TYPES OF ARGS THE on : value,  child_remove, child_changed, child_added
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_remove", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });

//database.ref("notes/-LmGcqJbIPBfmx1s2epq").remove();

// database.ref("notes").push({
//   title: "To Do",
//   body: "Go fro a run"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data");
//   });

// database
//   .ref()
//   .set({
//     name: "Gabriel Campos",
//     age: 21,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Philadelphia",
//       country: "United State"
//     }
//   })
//   .then(() => {
//     console.log("Second set call worked");
//   })
//   .catch(e => {
//     console.log("Yhings didnt for the second error ", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(function() {
//     console.log("Remove succeeded.");
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message);
//   });

// database.ref('expenses')
// .once('value')
// .then(snapshot=>{
//   const expenses = []

//   snapshot.forEach(childSnapshot=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })
