/*
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
[show hint]
Related problem: Reverse Words in a String II
Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Array.prototype slice()
// If end is omitted, slice extracts through the end of the sequence (arr.length).
// .eg: arr = [1, 2, 3, 4, 5] arr.slice(-2) will be [4, 5]

// ECMAScript中所有函数的参数都是按值来传递的。以下例子错误。因为函数中的nums只是array地址的拷贝，直接将nums赋予新的对象引用，不会改变函数外的传入的变量的对象引用。
// var rotate = function(nums, k) {
//     let _nums1 = nums.slice(-k);
//     let _nums2 = nums.slice(0, nums.length - k);
//     nums = _nums1.concat(_nums2);
// };

// Array.prototype.splice()
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start position, delete how many elements, add what element(s)
// concat() doesn't modify the original array but return a new array object
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return;
    let _nums1 = nums.slice(-k);
    let _nums2 = nums.slice(0, nums.length - k);
    let _nums3 = _nums1.concat(_nums2);
    nums.splice(0, nums.length);
    for (let i in _nums3) {
        nums.push(_nums3[i]);
    }
};