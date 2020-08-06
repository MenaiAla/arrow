/**
 * Author :
 * Github :
 * Date :
 * Unit Test : ./specs/order.spec.js
 */

import {
    checkArray
} from "../../helpers/check"

export function orderRangeDescBy(array, from, to, criteria = null) {
    // Order a range of an array by a specific criteria
    // criteria is an optional parameter and it's useful only for arrays that contain objects
    // Let's assume that we have this array
    const users = [{
            id: 1,
            name: "Ala Eddine"
        }, {
            id: 2,
            name: "Jhon Weak"
        }, {
            id: 3,
            name: "Eminem"
        }, {
            id: 4,
            name: "Karma"
        }]
        // When the developer call this method like this : orderRangeDescBy(users,0,2,'id')
    const orderedDescUsers = [{
            id: 3,
            name: "Eminem"
        }, {
            id: 2,
            name: "Jhon Weak"
        }, {
            id: 1,
            name: "Ala Eddine"
        }, {
            id: 4,
            name: "Karma"
        }]
        // Other examples :  
        // orderRangeDescBy([1,2,3,4],0,2) will be [3,2,1,4]
        // orderRangeDescBy(["a","b","c","d"],0,2) will be ["c","b","a","d"]


    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement orderRangeDescBy() function
        /**
         * Hint : COMMITS_TEMPLATE to know how to write your commits or see previous commits
         */
    }

}

export function orderDescBy(array, criteria = null) {
    // Order an array by a specific criteria
    // Let's assume that we have this array
    const users = [{
            id: 1,
            name: "Ala Eddine"
        }, {
            id: 2,
            name: "Jhon Weak"
        }, {
            id: 3,
            name: "Eminem"
        }, {
            id: 4,
            name: "Karma"
        }]
        // When the developer call this method like this : orderDescBy(users,'id')
    const orderedDescUsers = [{
        id: 4,
        name: "Karma"
    }, {
        id: 3,
        name: "Eminem"
    }, {
        id: 2,
        name: "Jhon Weak"
    }, {
        id: 1,
        name: "Ala Eddine"
    }]

    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit : :zap: Implement orderDescBy() function 
    }

}