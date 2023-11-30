function nbYear(p0, percent, aug, p) {

    var x = 0;
    while (true) {
        if (p0 >= p) {return x;}
        p0 = p0 * (1 + percent/100) + aug; x++;
    }
}


console.log(nbYear(1000, 2, 50, 1200))


// TEST
//
//
// const Test = require('@codewars/test-compat');
//
// describe("nbYear",function() {
//     it("Basic tests",function() {
//         Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//         Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//         Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
//     })})