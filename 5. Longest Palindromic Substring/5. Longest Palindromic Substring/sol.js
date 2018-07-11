// https://leetcode.com/problems/longest-palindromic-substring/description/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var a = s.split(''),left, right,
        size = a.length,
        max = Number.MIN_VALUE,
        start = 0;

    for(var i = 0; i < size; i++){
        left = i - 1 
        right = i + 1

        while(left >=0 && right < size) {
            if (a[left] === a[right]){
                left--
                right++
            } else { break }
        }
        if (right - left - 1 > max){
            max = right - left - 1
            start = left + 1
        }
        left = i 
        right = i + 1
        while(left >=0 && right < size) {
            if (a[left] === a[right]){
                left--
                right++
            } else { break}
        }

        if (right - left - 1 > max){
            max = right - left - 1
            start = left + 1
        }
    }

    return s.slice(start, start + max)
};


//  To find string is palindrome.

var isPalindrome = (str) => {
    var a = str.split('')
    var size = a.length
    var left = 0
    var right = size-1

    while( left < right ) {
        if(a[left] !== a[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

var res = isPalindrome('m')
console.log(res)