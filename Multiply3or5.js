// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//     let three = 3
//     let Five = 5
//     let tab=[]
//     let tabv2=[]
// for(let i=0; i<=number; i++){
//
//     //     let b = three*i
//     //     if(b<number){
//     //         const count = tab.push(b)
//     //         console.log(count)
//     //     }
//     //     let c = Five*i
//     //     if(c<number){
//     //         const countv2 = tabv2.push(c)
//     //     }
//     }
// const finall = tab.concat(tabv2)
//     console.log(finall)
//     const abc = finall.filter((value, index)=>finall.indexOf(value)===index);
//     let sum = 0
//     for(let i =0; i<abc.length; i++){
//         sum+= abc[i]
//     }
//     return sum
//
// }
// console.log(solution(20))


// function solution(number) {
//     let sum=0
//     for(let i=0; i<number; i++){
//         if(i % 3===0 || i% 5===0){
//             sum+=i
//         }
//     }
//     return sum
// }
//
// console.log(solution(20))
function solution(number) {
    return number>0?(Array.from(Array(number).keys()).reduce((suma, currentValue) => suma +  ((currentValue%3===0 || currentValue%5===0)?currentValue:0) , 0)):0;
}

console.log(solution(0))
// const { assert } = require("chai")
//
// function test(n, expected) {
//     it(`n=${n}`, () => {
//         let actual = solution(n)
//         assert.strictEqual(actual, expected)
//     })
// }
//
// describe("basic tests", function(){
//     test(10,23)
// })