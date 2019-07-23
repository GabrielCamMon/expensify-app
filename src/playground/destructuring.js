// const person = {
//   // name: "Andrew",
//   age: 27,
//   location: {
//     city: "Philadelphia",
//     temp: 92
//   }
// };

// const { name: firstName = "Name Default", age } = person;

// //const name = person.name;
// //const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "1947"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);

const item = ["Coffe (iced)", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
