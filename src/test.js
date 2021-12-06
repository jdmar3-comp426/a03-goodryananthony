// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
import mpg_data from "./medium/data/mpg_data";

require = require("esm")(module/* , options */)
module.exports = require("./main.js")
import {identifyArray, identifyVariable, removeKey, removeKeyNonDestructive, removeKeys} from "./mild/mild_2";
import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./mild/mild_1";
import {getMedian, getStatistics} from "./medium/medium_1";
import {allCarStats, makerHybrids, moreStats} from "./medium/medium_2";
import {searchHighPower, searchName} from "./medium/medium_3";

let people = [4, 2, 100, 200, 3, 1, 5, 4];


// console.log(sumToString(3, 9));
// console.log(getIncreasingArray(3, 7));
// console.log(maxAndMin(people));
//console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
// console.log(identifyArray(['some', 3, [3, 4], false]));
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log(obj);
obj = removeKeys(obj, ['password', 'age']);
// object not looks like this
console.log(obj);

console.log(searchName(mpg_data, 'Aveo5'));





