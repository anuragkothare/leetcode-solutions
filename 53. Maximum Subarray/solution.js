// https://leetcode.com/problems/maximum-subarray/description/


// Naive Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = -Number.MAX_VALUE

  var preArr = []
  preArr[0] = nums[0]
  for(var i=1;i<nums.length; i++) {
      preArr[i] = preArr[i-1] + nums[i]
  }

  console.log(preArr)
  for(var i=0; i<preArr.length; i++) {
      for(var j=i; j<preArr.length; j++) {
         var sum = prefixSum(preArr, i, j)



          maxSum = Math.max(maxSum, sum)
          // console.log(maxSum)
      }

  }
  return maxSum


};

var prefixSum =function(arr, start, end) {
  var sum = 0

  if(start===0) {
     return  sum = arr[end]
  }
  else {
      return sum = arr[end] - arr[start-1]
  }

}


// O(n) Solution

