// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let _toCompare;
    for (let i = 0; i < nums.length; i++) {
        if (_toCompare === undefined) {
            _toCompare = nums[i];
            continue;
        }
        if (nums[i] === _toCompare) {
            // nums[i] = undefined;
            nums.splice(i, 1);
            i--;
        } else {
            _toCompare = nums[i];
        }
    }
    return nums.length;
};

/*
Node:
Looping an array from the length down (i--) can avoid the problem of missing index when deleting an element while looping.
*/