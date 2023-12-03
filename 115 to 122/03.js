let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let myFriends = arr3.concat(arr1,arr2);
console.log(myFriends);
// Write Your Destructuring Assignment Here
let [ , a,b,c , , , , , ] = myFriends;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed