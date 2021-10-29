import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
  let y = 0;
  for (let z = 0; z < array.length; z++) {
   y += array[z];
  }
  return y;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 *              2, 2, 2, 3, 4, 5,
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
 if (array.length === 1) {
    return array[0];
 }
 let half = array.length / 2;
 let floor = Math.floor(half);
  if (half % 1 !== 0) {
    return array[floor];
  } else {
   return ((array[floor-1] + array[floor]) / 2);
  }

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
 let length = array.length;
 let sum = getSum(array);
 let mean = sum / length;
 let median = getMedian(array);
 let min = Number.MAX_VALUE;
 let max = Number.MIN_VALUE;
 for (let z = 0; z < length; z++) {
  if (array[z] < min) {
   min = array[z];
  }
  if (array[z] > max) {
   max = array[z];
  }
 }
 let vari = variance(array, mean);
 let std = Math.sqrt(vari);
 return [{min: min, median: median, max: max, variance: vari, mean: mean, length: length, sum: sum, standard_deviation: std}];

}

