function findEvenIndex(arr) {
    let suma = 0
    let leftSuma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        suma = suma - arr[i]

        if (leftSuma === suma)return i

        leftSuma = leftSuma + arr[i]
    }
    return -1;
}




console.log(findEvenIndex([1,2,3,4,5,6]))

//
// TEST
// const Test = require('@codewars/test-compat');
//
// describe("FindEvenIndex", function() {
//     it("Tests", function() {
//         Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
//         Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
//         Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
//         Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
//     });
// });