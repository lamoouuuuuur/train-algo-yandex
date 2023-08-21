const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        let tmp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = tmp;
    }

    return nums;
}

console.log(selectionSort([1, 5, 2, 3, 4, 9]))
console.log(selectionSort([2, 5, 1, 2, 9, 10, 3, 15]))