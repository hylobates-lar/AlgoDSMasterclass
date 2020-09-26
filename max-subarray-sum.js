// find the max sub array sum given an array of integers and a number of integers to add
// ex array = [1, 2, 3, 4], num = 2
// return 7 because 3 + 4 = 7, highest consecutive sum of 2 integers
// sliding window approach O(n)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    } 

    return maxSum;
}