/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
   return `${a} + ${b} = ${a + b}`;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
   let arr = [];
   for (let i = 0; i <= endNumber - startNumber; i++) {
      arr[i] = startNumber + i;
   }
   return arr;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
   let max1 = Math.max(...numbers);
   let min1 = Math.min(...numbers);


   return {max: max1, min: min1};
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
   let arrKeys = [];
   array.reduce(function(data, b) {
      if (arrKeys.find(element => element === b) === undefined) {
         arrKeys.push(b);
      }
   }, arrKeys);
   let final = {};
   for (let i = 0; i < arrKeys.length; i++) {
      final[arrKeys[i]] = array.reduce(function(a, b) {
         if (b === arrKeys[i]) {
            return a + 1;
         } else {
            return a;
         }
      }, 0);
   }

   return final;
}
