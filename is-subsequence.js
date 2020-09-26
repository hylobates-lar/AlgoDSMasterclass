// write a function isSubsequence which takes in 2 strings and checks whether the characters in the first string form a
// subsequence of the characters in the second string
// check if chars in first string appear in second string in order
// time O(n + m) space O(1)
// examples
// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false

function isSubsequence(string1, string2) {
    if (!string1.length) {
        return true
    }
    // multiple pointers
    // iterate through strings comparing as you go
    let i = 0
    let j = 0
    while (j < string2.length) {
        if (string1[i] === string2[j]) {
            if (string1[i + 1]){
                i++
            }
            j++
            return true
        } else {
            j++
        }
    }
    return false

}