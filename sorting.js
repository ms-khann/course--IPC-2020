function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let prev_index = i - 1;
        while (prev_index >= 0 && arr[prev_index] > current) { //t && 3 > 9
            arr[prev_index + 1] = arr[prev_index];
            prev_index = prev_index - 1;
        }
        arr[prev_index+1] = current;
    }
}

let arr = [3,2,9,8,5,10];
insertionSort(arr);
console.log(arr);