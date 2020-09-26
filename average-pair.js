// write a function called averagePair given a sorted array of integers and a target average
// determine if there is a pair of values in the array where the avg of the pair equals target avg
// there may be more than one pair that matches the avg target
// examples
// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([], 4) // false

function averagePair(array, targetAvg) {
    // make 2 pointers start on either end
    let i = 0
    let j = array.length - 1
    // while i <= j
    while (i <= j) {
        // find avg of those numbers
        let avg = (array[i] + array[j]) / 2
        // if target matches return true
        if (avg === targetAvg) {
            return true
        }
        // if bigger than target, move j--
        if (avg > targetAvg) {
            j--
        }
        // if smaller than target, move i++
        if (avg < targetAvg) {
            i++
        }
    }
    return false
}
