function whatCentury(year)
{


    return Math.ceil(year/100) +(Math.ceil(year/100).toString().slice(-1)==='1'?"st":Math.ceil(year/100).toString().slice(-1)==='2'?"nd":Math.ceil(year/100).toString().slice(-1)==='3'?"rd":"th")
}

console.log(whatCentury(("1234")))


// TEST
// const chai = require("chai");
// const assert = chai.assert;
//
// describe("Tests", () => {
//     it("test", () => {
//         assert.strictEqual(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
//         assert.strictEqual(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
//         assert.strictEqual(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
//         assert.strictEqual(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
//         assert.strictEqual(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
//         assert.strictEqual(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
//         assert.strictEqual(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");
//     });
// });
