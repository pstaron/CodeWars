const numberNames = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90,
    "hundred": 100,
    "thous":1000,
    "thousand": 1000,
    "million": 1000000,
    "billion": 1000000000
};
const mnozenie={
    "hundred": 100,
    "thousand": 1000,
    "million": 1000000,
    "billion": 1000000000
}
function parseInt(name) {
    let andowe = name.replaceAll(" and "," - ")
    let words = andowe.split(/[ -]+/);
    let number = 0;

    for (const word of words) {
        if (word in numberNames) {
            if(!(word in  mnozenie)) {
                number += numberNames[word];
            }
            else {
                if (number%10!==0 && number%100<10 && number%1000<100) {
                    number+=mnozenie[word]*(number % 10)
                    number-=number % 10

                }
                else
                {
                    number *= mnozenie[word];
                }
            }
        }

        else {
            throw new Error(`Unknown word: ${word}`);
        }
    }

    return number;
}
console.log(parseInt('one thousand three hundred and thirty-seven'))
/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(parseInt('one'), 1);
        Test.assertEquals(parseInt('twenty'), 20);
        Test.assertEquals(parseInt('two hundred forty-six'), 246);
    });
});
*/
