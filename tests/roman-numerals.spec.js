const chai = require('chai')

const assert = chai.assert
const arabicToRoman = require('../roman-numerals.js')

assert(arabicToRoman(1) === 'I', "1 returns 'I'")
assert(arabicToRoman(10) === 'X', "10 returns 'X'")
assert(arabicToRoman(50) === 'L', "50 returns 'L'")
assert(arabicToRoman(100) === 'C', "100 returns 'C'")
assert(arabicToRoman(500) === 'D', "500 returns 'D'")
assert(arabicToRoman(1000) === 'M', "1000 returns 'M'")
assert(arabicToRoman(0) === 'nulla', "0 returns 'nulla'")
