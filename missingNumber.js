var missingNumber = function(nums) {
    const l = nums.length;
    
    const sum = l * (l + 1)/2;

    const sumOfArr = nums.reduce((acc, curr) => acc += curr, 0);

    return sum - sumOfArr;
};