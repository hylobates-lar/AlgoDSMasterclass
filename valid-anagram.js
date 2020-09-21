// given 2 strings, check is they are an anagram of one another
// assumed lowercase, no other characters just letters and spaces
let a = 'hello'
let b = 'hiya'

function validAnagram(str1, str2){
    let str1Obj = {}
    let str2Obj = {}

    function makeObj(string, stringObj) {
        for (let i = 0; i < string.length; i++) {
            if (stringObj[string[i]]) {
                stringObj[string[i]]++
            } else {
                stringObj[string[i]] = 1
            }
        }
        return stringObj
    }

    makeObj(str1, str1Obj)
    makeObj(str2, str2Obj)
    
    for (let char in str1Obj) {
        if(!str2Obj[char] || str2Obj[char] !== str1Obj[char]) {
            return false
        }
    }
    return true   
}

