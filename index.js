/****************************************************************************************
 * Performs a binary search on a sorted array to find the index of a target value.
 * @param {Array<number>} arr - The sorted array to search.
 * @param {number} target - The target value to find.
 * @returns {number} - The index of the target value in the array if found, or -1 if not found.
 *************************************************************************************************/



function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Element not found
}

// Example usage:
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const index = binarySearch(array, target);
console.log(index); // Output: 5 (index of target in the array)

const useFullFunction = {
    binarySearch
}


module.exports = useFullFunction;