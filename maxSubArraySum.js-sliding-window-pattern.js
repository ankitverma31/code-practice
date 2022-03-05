// Problem Statement: maxSubArraySum
// Input: ([2,6,9,3,1,8,5,6,3],3)
// Output: 19
// Complexity: O(N)

function maxSubArraySum(arr, k) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length == 0){
        return 0;
    }
    for(let i=0;i<k;i++){
        maxSum+=arr[i];
    }
    tempSum = maxSum;
    for(let i=k;i<arr.length;i++){
        tempSum = arr[i]+tempSum-arr[i-k];
        maxSum = Math.max(tempSum,maxSum);
    }
    console.log(maxSum);
}

maxSubArraySum([2,6,9,2,1,8,5,6,3],3);