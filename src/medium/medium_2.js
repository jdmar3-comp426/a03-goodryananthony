import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: avgMpg(),
    allYearStats: allYearStats(),
    ratioHybrids: ratioHybrids(),
};

function avgMpg() {
    let pie = mpg_data;

    let totalHighway = pie.reduce(function(acc, b) {
        return acc +  b.highway_mpg;
    }, 0)

    let totalCity = pie.reduce(function(acc, b) {
        return acc + b.city_mpg;
    }, 0)

    return {
        city: (totalCity / mpg_data.length),
        highway: (totalHighway / mpg_data.length)
};
}

function allYearStats() {
    let pie = mpg_data;
    let yearArr = [];
    pie.forEach(function(b)
        {
            yearArr.push(b.year)
        }

    )
    return getStatistics(yearArr);
}

function ratioHybrids() {
    let pie = mpg_data;

    let totalHybrid = pie.reduce(function(acc, b) {
        return acc + (b.hybrid === true);
    }, 0)

    return totalHybrid / mpg_data.length;
}



/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: makerHybrids(),
    avgMpgByYearAndHybrid: undefined
};

export function makerHybrids() {
    let pie = mpg_data;

    let arrMakers = [{hybrids: [], make: "GMC",}];
    pie.reduce(function(data, b) {
        if (b.hybrid) {
            if (data.find(element => element.make === b.make) !== undefined) {
                data.find(element => element.make === b.make).hybrids.push(b.id);
            } else {
                data.push({hybrids: [b.id], make: b.make});
            }
        }
        return data;
    }, arrMakers);
    let newArr = [];
    for (let i = 0; i < arrMakers.length; i ++) {
        let q = -Infinity;
        let ind = 0;
        for (let j = 0; j < arrMakers.length; j++) {
          if (arrMakers[j].hybrids.length > q) {
              q = arrMakers[j].hybrids.length;
              ind = j;
          }
        }
        newArr.push(arrMakers[ind]);
        arrMakers.splice(ind, 1);
        i = i-1;
    }
    let len = [];
    for (let z = 0; z < newArr.length; z++) {
        len.push(newArr[z].hybrids.length);
    }
 return newArr;
}


function mpgYearHybrid() {

}


function inArr(Object, string) {
    return Object.make === string;
}
