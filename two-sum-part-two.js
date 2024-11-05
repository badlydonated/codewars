// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr, sum){
    //pairs arr
    const pairs = []
    //hashmap obj
    const seenNums = {}
    //loop
    for(const currentNum of arr){
      const diff = sum - currentNum
      if(seenNums[diff]){
        pairs.push([currentNum, diff])
      }else{
        seenNums[currentNum] = true
      }
    }
    return pairs
  }