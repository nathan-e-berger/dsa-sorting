/**
 *  Loop with i from end of array towards beginning
    Loop with j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array
    Why is this “bubble sort”?
    Big numbers bubble to the top

    [4,12,10,20 7, 9]  >>  [4, 7, 9 , 10, 12, 20]

    j 3
    i 1
 */


function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
  return nums;
}

module.exports = bubbleSort;