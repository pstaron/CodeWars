function expandedForm(num) {
let a = num.toString().split('')
    console.log(a)
    for(let i = 0; i < a.length; i++){
        for(let o = a.length-i; o>1; o--){
            a[i]+='0'
        }
    }
    a=a.filter(value => !value.startsWith(0));
    return a.join(' + ')
}

console.log(expandedForm(42))
// test
// const { assert } = require('chai');
//
// describe("Tests", () => {
//     it("test", () => {
//         assert.strictEqual(expandedForm(12), '10 + 2');
//         assert.strictEqual(expandedForm(42), '40 + 2');
//         assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
//     });
// });
