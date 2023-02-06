// Exercise 1:

        let array = [1,7,-3,9];
        let max = array[0];

        for(let val of array){
            if (max < val){
                max = val;
            }
        }
        document.write(max);
document.write("<hr>")


// Exercise 2:

let temp = Math.floor(Math.random() * 40);

if (temp < 10) {
    document.write(`The weather is <b>cold</b> by ${temp} degrees. <br>`);
} else if(temp < 20) {
    document.write(`The weather is <b>moderate</b> by ${temp} degrees. <br>`);
} else if (temp < 30) {
    document.write(`The weather is <b>hot</b> by ${temp} degrees. <br>`);
} else {
    document.write(`The weather is <b>very hot</b> by ${temp} degrees. <br>`);
}
document.write("<hr>")