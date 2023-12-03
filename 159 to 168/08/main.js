import {a as numOne,b as numTwo,c as numThree} from "./mod-two.js";
import {default as calc} from "./mod-one.js";
let modOne = {
    numOne : numOne,
    numTwo : numTwo,
    numThree: numThree,
}
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));