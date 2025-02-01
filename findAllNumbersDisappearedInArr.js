var findDisappearedNumbers = function(nums) {
    const l = nums.length;
    const allNums = new Set();
    
    for (const n of l) {
        allNums.add(n);
    }

    for (let num of nums) {
        if(allNums.has(num)) {
            allNums.delete(num); 
        }
    }
    return Array.from(allNums);
};