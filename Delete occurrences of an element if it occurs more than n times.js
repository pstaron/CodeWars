function deleteNth(arr,n){
  const answer =[];
 const count = {};
  for (const el of arr){
    if (count[el]) count[el] = count[el] +1
    else count[el] = 1;
    if(count[el] <= n) answer.push(el);
  };
  return answer;
};

/*
TEST

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
    assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  });
});
*/
