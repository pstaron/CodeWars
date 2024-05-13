function moveZeros(arr) {
    const b = []
    const found = arr.filter((element)=> element !== 0)
    const found0= arr.filter((element)=> element ===0)

    for(let i = 0; i<found0.length; i++){
        b.push(found0[i])
    }
    return found.concat(b)

}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))


// const {assert, config} = require("chai");
// config.truncateThreshold = 0;
//
// describe("Tests", () => {
//     it("test", () => {
//         assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//     });
// });