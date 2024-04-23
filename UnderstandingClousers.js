function buildFun(n){

    var res = []

    for (let i = 0; i< n; i++){
        res.push(()=>i)
    }
    return res
}

console.log(buildFun(10)[i])
//
// describe("Tests", () => {
//     it("test", () => {
//         for(var i = 0; i< 10; i++){
//             Test.assertEquals(buildFun(10)[i](), i);
//         }
//
//
//
//     });
// });
