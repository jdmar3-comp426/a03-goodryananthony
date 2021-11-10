import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let arrCar = car_data.filter(element => element.horsepower >= minHorsepower && element.torque >= minTorque);
    let sortArr = [];
    for (let i = 0; i < arrCar.length; i++) {
        let q = -Infinity;
        let ind = 0;
        for (let j = 0; j < arrCar.length; j++) {
            if (arrCar[j].horsepower > q) {
                q = arrCar[j].horsepower;
                ind = j;
            }
        }
        sortArr.push(arrCar[ind]);
        arrCar.splice(ind, 1);
        i = i - 1;
    }
    return sortArr;

}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let arrCar = car_data.filter(element => element.city_mpg >= minCity && element.highway_mpg >= minHighway);
    let sortArr = [];
    for (let i = 0; i < arrCar.length; i++) {
        let q = -Infinity;
        let ind = 0;
        for (let j = 0; j < arrCar.length; j++) {
            if (arrCar[j].highway_mpg > q) {
                q = arrCar[j].highway_mpg;
                ind = j;
            }
        }
        sortArr.push(arrCar[ind]);
        arrCar.splice(ind, 1);
        i = i - 1;
    }
    return sortArr;

}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let arrCar = car_data.filter(element => element.id.toLowerCase().includes(searchTerm.toLowerCase()));

    let sortArr = [];
    for (let i = 0; i < arrCar.length; i++) {
        let q = Infinity;
        let ind = 0;
        for (let j = 0; j < arrCar.length; j++) {
            if (arrCar[j].id.toLowerCase().indexOf(searchTerm.toLowerCase()) < q) {
                q = j;
            }
        }
        sortArr.push(arrCar[ind]);
        arrCar.splice(ind, 1);
        i = i - 1;
    }
    return sortArr;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let final = [];
    let sortYear = [];
    for (let i = 0; i < years.length; i++) {
        let q = -Infinity;
        let ind = 0;
        for (let j = 0; j < years.length; j++) {
            if (years[j] > q) {
                q = years[j];
                ind = j;
            }
        }
        sortYear.push(years[ind]);
        years.splice(ind, 1);
        i = i - 1;
    }
    for (const element of sortYear) {
        let nice = car_data.filter(elem => elem.year === element);
        final.push(nice);
    }
    return final;
}
