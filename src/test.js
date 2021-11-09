// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
module.exports = require("./main.js")
import {sumToString, getIncreasingArray, maxAndMin} from "./mild/mild_1";
import {getMedian, getStatistics} from "./medium/medium_1";
import {allCarStats, makerHybrids, moreStats} from "./medium/medium_2";

let people = [4, 2, 100, 200, 3, 1, 5];


console.log(sumToString(3, 9));
console.log(getIncreasingArray(3, 7));
console.log(maxAndMin(people));




