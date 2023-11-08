function dblLinear(n) {
    let v=[1]
    let z =0
    let y=0
 for(let i=0; i<n; i++){
     let zex =3*v[z]+1
     let yex = 2*v[y]+1

     if(zex <=yex){
         v.push(zex)
         z++
         if(zex === yex){
             y++
         }
     }else{
         v.push(yex)
         y++
     }

 }
console.log()
    return v[n]
}

console.log(dblLinear(100))


//TEST
/*
const Test = require('@codewars/test-compat');

function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

describe("dblLinear",function() {
    it("Basic tests",function() {
        testing(dblLinear(10), 22)
        testing(dblLinear(20), 57)
        testing(dblLinear(30), 91)
        testing(dblLinear(50), 175)
        testing(dblLinear(100), 447)
    })})*/
