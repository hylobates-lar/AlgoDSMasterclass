// implement function areThereDuplicates which accepts a variable number of arguments and checks for duplicates
// can be solved with frequency counter patter or multiple pointers pattern
// O(n) time and space
// bonus O(n log n) time and O(1) space

// examples
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, '2') // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
    // if no args or 1 arg return false
    if (args.length === 1 || args.length === 0) {
        return false
    }

    let argObject = {}
    // iterate through arguments
    for (let i = 0; i < args.length; i++) {
        // keep counter of args
        if (argObject[args[i]]) {
            return true
        } else {
            argObject[args[i]] = 1
        }
    }

    return false
}