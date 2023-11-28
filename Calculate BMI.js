function bmi(weight, height) {
    const bmiResult = (weight/(height*height))
    if(bmiResult <= 18.5)return "Underweight"
    if(bmiResult <= 25.0)return "Normal"
    if(bmiResult <= 30.0)return "Overweight"
    if(bmiResult  > 30.0)return "Obese"

}
console.log(bmi(80, 1.80))

// test
//
// const Test = require('@codewars/test-compat');
//
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(bmi(80, 1.80), "Normal");
//     });
// });
