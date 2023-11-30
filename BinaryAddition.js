function addBinary(a,b) {
    return (a+b).toString(2)
}

console.log(addBinary(8,2))

// Test
// const Test = require('@codewars/test-compat');
//
// describe("addBinary(1,2)", function() {
//     var results1 = addBinary(1,2);
//     it("Should return something that isn't falsy", function() {
//         Test.expect(results1, "Something is wrong, no results!");
//     });
//     it("Should return \"11\"", function() {
//         Test.assertEquals(results1, "11");
//     });
// });