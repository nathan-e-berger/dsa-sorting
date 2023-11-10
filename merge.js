'use strict';

//inputs: 2 sorted arrs
//output: 1 sorted arr merged

//create an empty arr
//start pointers at beginning of both arrs
//if a value <= b value, push a value to arr and increment a pointer
//else, push b value and increment b pointer
//once 1 arr is empty, push all remaining values from other arr (use spread)

//let arr1 = [1,3,4,5];
//let arr2 = [2,4,6,8];
//merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

function merge(arr1, arr2) {
  const merged = [];

  let start1 = 0;
  let start2 = 0;

  while ((start1 !== arr1.length) && (start2 !== arr2.length)) {
    if (arr1[start1] <= arr2[start2]) {
      merged.push(arr1[start1]);
      start1++;
    }
    else {
      merged.push(arr2[start2]);
      start2++;
    }

    if (start1 !== arr1.length && start2 === arr2.length) {
      merged.push(...arr1.slice(start1));
    }

    else if (start2 !== arr2.length && start1 === arr1.length) {
      merged.push(...arr2.slice(start2));
    }
  }

  return merged;
}

/*Break up the array into halves until you can compare one value with another
Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
Once the array is merged back together, return the merged (and sorted!) array*/

//base case: if arr length is 0 or 1

//find mid point of arr to split
//declare left and right side of arr => decrease arr size my recursively calling mergeSort
//return our recursive call our merge fn left and right side

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };