var twoSum = function (nums, target) {
  const hm = {};

  for (let i = 0; i < nums.length; i++) {
    const cmp = target - nums[i];

    if (Object.hasOwn(hm, cmp)) {
      return [i, hm[cmp]];
    } else {
      hm[nums[i]] = i;
    }
  }
};
