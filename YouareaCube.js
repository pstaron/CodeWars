function youAreACube (value){
//props if you complete in one line :)
    return Math.cbrt(value)%1===0
}

console.log(youAreACube(27))

// test
// describe("Basic tests",() =>{
//     Test.assertEquals(youAreACube(27),true);
//     Test.assertEquals(youAreACube(1),true);
//     Test.assertEquals(youAreACube(2),false);
//     Test.assertEquals(youAreACube(99),false);
//     Test.assertEquals(youAreACube(64),true);
// })
//