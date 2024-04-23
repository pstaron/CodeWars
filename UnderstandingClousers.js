function buildFun(n){

    let res = []
    for (let i = 0; i< n; i++){
        a(i)
    }
    function a (iem){
        res.push(()=>iem)
    }
    return res
}
for (let i = 0; i< 10; i++)
    buildFun(10)[i]

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
