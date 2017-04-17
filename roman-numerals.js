// Given a positive integer number (eg 42) determine
// its Roman numeral representation as a String (eg "XLII").

// You cannot write numerals like IM for 999.
// Wikipedia states "Modern Roman numerals are written by
// expressing each digit separately starting with the
// leftmost digit and skipping any digit with a value of zero."

// Examples:

// 1 ->    "I" | 10 ->    "X" | 100 ->    "C" | 1000 ->    "M"
// 2 ->   "II" | 20 ->   "XX" | 200 ->   "CC" | 2000 ->   "MM"
// 3 ->  "III" | 30 ->  "XXX" | 300 ->  "CCC" | 3000 ->  "MMM"
// 4 ->   "IV" | 40 ->   "XL" | 400 ->   "CD" | 4000 -> "MMMM"
// 5 ->    "V" | 50 ->    "L" | 500 ->    "D" |
// 6 ->   "VI" | 60 ->   "LX" | 600 ->   "DC" |
// 7 ->  "VII" | 70 ->  "LXX" | 700 ->  "DCC" |
// 8 -> "VIII" | 80 -> "LXXX" | 800 -> "DCCC" |
// 9 ->   "IX" | 90 ->   "XC" | 900 ->   "CM" |

// 1990 -> "MCMXC"  (1000 -> "M"  + 900 -> "CM" + 90 -> "XC")
// 2008 -> "MMVIII" (2000 -> "MM" + 8 -> "VIII")
//   99 -> "XCIX"   (90 -> "XC" + 9 -> "IX")
//   47 -> "XLVII"  (40 -> "XL" + 7 -> "VII")

// performance thoughts:
// memoization - this probably wouldn't help performance for a single run
// function like this, but if it were in a program memo would cut time??

module.exports = (num)=>{
  if (!num) return 'nulla'

  const romanLookUp = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  let trackerNum = num
  const returnRoman = Object.entries(romanLookUp).reduce((roman, entry)=>{
    let current = roman
    while (trackerNum >= entry[1]) {
      current += entry[0]
      trackerNum -= entry[1]
    }
    return current
  }, '')
  return returnRoman
}
