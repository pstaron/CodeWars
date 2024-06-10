var min = function(list){

    return(Math.min(...list))
}

var max = function(list){

    return Math.max(...list);
}
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))


// const Test = require('@codewars/test-compat');
//
// describe("Test", function(){
//     it("Examples", function(){
//         Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
//         Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
//         Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
//         Test.assertEquals(max([5]), 5);
//     });
// });