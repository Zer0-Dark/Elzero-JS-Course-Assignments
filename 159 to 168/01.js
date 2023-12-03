// Needed Output
let myBirthDay = new Date("1/1/2000");
let dateNow = new Date();
let myAge = dateNow - myBirthDay;

console.log(dateNow);
console.log(myBirthDay);
console.log(myAge); //milli sec
console.log(myAge / 1000); //sec
console.log(myAge /1000/ 60); //min
console.log(myAge /1000/ 60 / 60); // hours
console.log(myAge /1000/ 60 / 60 / 24); //days
console.log(myAge /1000/ 60 / 60 / 24 / 365); //years
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
