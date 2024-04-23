
const a ="{\r\n  \"title\": \"This is an example of posting a card\",\r\n  \"subtitle\": \"<h3>This is the subtitle</h3>\",\r\n  \"text\": \"Here is some body text. <br>\\r\\nAnd a <a href=\\\"http://microsoft.com/\\\">hyperlink</a>. <br>\\r\\nAnd below that is some buttons:\",\r\n  \"buttons\": [\r\n    {\r\n      \"type\": \"messageBack\",\r\n      \"title\": \"Login to FakeBot\",\r\n      \"text\": \"login\",\r\n      \"displayText\": \"login\",\r\n      \"value\": \"login\"\r\n    }\r\n  ]\r\n}"
console.log(a)
// describe("Sample tests", function() {
//
//     it("Simple tests", () => {
//         assert.strictEqual(queueTime([], 1), 0);
//         assert.strictEqual(queueTime([1,2,3,4], 1), 10);
//         assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
//         assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);
//     });
//
//     it("Examples", () => {
//         assert.strictEqual(queueTime([5,3,4],    1), 12);
//         assert.strictEqual(queueTime([10,2,3,3], 2), 10);
//         assert.strictEqual(queueTime([2,3,10,2], 2), 12);
//     });
//
//     //add some more example tests here, if you like
// });A