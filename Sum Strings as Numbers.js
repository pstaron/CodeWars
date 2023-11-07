function sumStrings(a,b) {
    const x = BigInt(a)
    const z = BigInt(b)
    let c = (x+z)
    c =String(c)

    return(c)
}
console.log(sumStrings("10000000033333333333","333333333333333333"))
/*
TEST
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(sumStrings('123','456'),'579')
    });
});
*/
