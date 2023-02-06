let array = [1, 7, -3, 9];

let max = array[0];

for (let val of array) {
    if (val > max) {
        max = val;
    }
    console.log(max);
}