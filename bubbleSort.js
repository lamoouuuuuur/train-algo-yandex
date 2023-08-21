const bubbleSort = (nums) => {
    const result = [];
    let tmp;
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    Object.assign(result, nums);
    return result;
}

console.log(bubbleSort([1, 5, 2, 3, 4, 9]))
console.log(bubbleSort([2, 5, 1, 2, 9, 10, 3, 15]))