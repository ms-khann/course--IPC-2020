let arr = [1, 2, 3, 4, 5, 6, 7, 100];

// FROM SAHIL
function search(arr, searching_element) {
    if (arr.length == 0) {
        return "ELEMENT NOT FOUND";
    }
    let left = 0,
        right = arr.length;
    let middle = Math.floor(left + right / 2);
    if (arr[middle] === searching_element) {
        return `${arr[middle]} Found`;
    }
    if (searching_element < arr[middle]) {
        right = middle;
    } else {
        left = middle + 1;
    }
    return search(arr.slice(left, right), searching_element);
}
console.log(search(arr, 100));
// *********


function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        // debugger;
        let mid = Math.floor((left + right) / 2);
        // debugger;
        if (arr[mid] == val) {
            // debugger;
            return `${arr[mid]} ELEMENT fOUND`;
        }
        if (val < arr[mid]) {
            // debugger;
            right = mid - 1;
        } else {
            // debugger;
            left = mid + 1;
        }
    }
    // debugger;
    return `${val} ELEMENT NOT FOUND`;
}
console.log(binarySearch(arr, 7));
