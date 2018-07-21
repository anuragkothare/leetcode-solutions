// https://leetcode.com/problems/3sum/description/



var threeSum = function(nums) {
    if(nums.length < 3) {
        return []
    }
    var result = []
    nums.sort((a, b) => {
        return a-b
    })
    
    for(var i=0;i<nums.length-2;i++) {
        if(i>0 && nums[i] === nums[i-1]) continue;
        var left = i+1, right = nums.length -1
        while(left < right) {
            if(nums[left] + nums[right] === -nums[i]) {
                result.push([nums[i], nums[left++], nums[right--]])
                while(left<nums.length && nums[left] === nums[left-1]) left++
                while(right>0 && nums[right] === nums[right+1]) right--
            } else if (nums[left] + nums[right] > -nums[i]) right--
            else left++
        }
    }
    return result   
}