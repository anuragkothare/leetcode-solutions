// https://leetcode.com/problems/search-insert-position/description/


var searchInsert = function(nums, target) {
    var len = nums.length;
    var low = 0;
    var high = len - 1;
    var mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
    
};