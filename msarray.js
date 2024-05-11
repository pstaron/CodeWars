
const maxSubArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0

    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){


        //cumulating answers to the top
        //compare currentSum add current number
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])
        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}
console.log(maxSubArray(  [-3,-1]))


// if(data.length===1){
//     a.push(data[i])
// }else{
//     if(data[i] + data[i+1]>0){
//         a.push(data[i+1])
//     }
// }
//
