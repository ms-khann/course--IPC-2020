/// CODE IS INCOMPLETE OR HAS BUG

let tiles = [
    [4, 3, 3, 4],
    [4, 4, 1, 4],
    [2, 4, 1, 4],
]; // [column,red,green,blue]
for (let i = 0; i < tiles.length; i++) {
    let col = tiles[i][0];
    let red = tiles[i][1];
    let green = tiles[i][2];
    let blue = tiles[i][3];
    console.log(colour(red,green,blue,col));
}
function colour(red, green, blue, n) {
    let left = 0;
    let right = Math.min(n, Math.min(red, blue));
    let ans = 0;
    while (left <= right) {
        let mid = (left + right) / 2;
        // this good function check weather i can fill mid column or not.
        if (good(red, green, blue, mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

function good(red, green, blue, mid) {
    return red - mid + (blue - mid) + green >= mid;
}
