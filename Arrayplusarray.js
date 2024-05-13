function persistence(num) {
    let i = 0;
    while (num.toString().length !== 1) {
        num = num.toString()
        num = num.split("")
        num = num.reduce((a,b)=>a*b);
        i++;
    }
    return i;
}
console.log(persistence(999))


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Persistent Bugger.", () => {
//     it("Fixed tests", () => {
//         assert.strictEqual(persistence(39),3);
//         assert.strictEqual(persistence(4),0);
//         assert.strictEqual(persistence(25),2);
//         assert.strictEqual(persistence(999),4);
//     });
// });