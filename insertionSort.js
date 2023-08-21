const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let currentItem = nums[i];
        while (j >= 0 && nums[j] > currentItem) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = currentItem;
    }

    return nums;
}

console.log(insertionSort([4, 2, 3, 5, 1]))
console.log(insertionSort([1, 5, 2, 3, 4, 9]))
console.log(insertionSort([2, 5, 1, 2, 9, 10, 3, 15]))