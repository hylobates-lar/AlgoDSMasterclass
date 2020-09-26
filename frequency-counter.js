const assert = require('assert').strict;

// write a function called sameFrequency
// given 2 positive integers, find out if the two numbers have the same frequency of digits
// must be O(n)

// examples
assert.equal(sameFrequency(182, 281), true) // true
assert.equal(sameFrequency(34, 14), false) // false
assert.equal(sameFrequency(3589578, 5879385), true) // true
assert.equal(sameFrequency(22, 222), false) // false

function sameFrequency(num1, num2) {
    // turn num to string then array
    let num1Array = `${num1}`.split('')
    let num2Array = `${num2}`.split('')
    

    // return false if lengths don't match
    if (num1Array.length !== num2Array.length) {
        return false
    }

    // create objects with counter as values
    let num1Obj = {}
    let num2Obj = {}

    function makeObj(array, obj) {
        for (let i = 0; i < array.length; i++) {
            if (obj[array[i]]) {
                obj[array[i]] += 1
            } else {
                obj[array[i]] = 1
            }
        }
        return obj
    }
    makeObj(num1Array, num1Obj)
    makeObj(num2Array, num2Obj)

    // compare objects
    for (let key in num1Obj) {
        if (!num2Obj[key]) {
            return false
        }
        if (num2Obj[key] !== num1Obj[key]) {
            return false
        }
    }

    // return true if they have the same digits and values
    return true
}