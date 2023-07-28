// Problem Statement: Implement Binary Search Algorithm

function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] != k && start <= end) {
    k > arr[mid] ? (start = mid + 1) : (end = mid - 1);
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] == k ? arr[mid] : -1;
}

console.log(binarySearch([1, 3, 5, 6, 9, 10, 14, 15, 16, 17, 18, 20, 24, 29, 30], 17));
