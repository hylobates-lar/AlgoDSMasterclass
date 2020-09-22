// given a sorted array of integers, return number of unique values

let arr = [1, 1, 2, 3, 4, 4, 4, 5] 
let arr2 = []

function countUniqueValues(array){
    if (!array.length) {
        return 0
    }

    for (let i = 0; i < array.length;) {
        for (let j = i + 1; j < array.length;) {
            if (array[i] === array[j]) {
                j++
            } else {
                i++
                array[i] = array[j]
            }
        }
        return i + 1
    }
    
}


// //their solution
// function countUniqueValues(array){
//     if (!array.length) {
//         return 0
//     }

//     let i = 0
//     for (let j = 1; j < array.length; j++) {
//         if (array[i] !== array[j]) {
//             i++
//             arr[i] = arr[j]
//         } 
//     }
//     return i + 1    
// }

