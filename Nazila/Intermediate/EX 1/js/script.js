let sGrade = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
];

let gradeArray = [
    [60, "F"],
    [70, "D"],
    [80, "C"],
    [90, "B"],
    [100, "A"],
];



for (let index in sGrade) {
    sGrade[index][1];
    let sum = 0;
    for (let i = 0; i < sGrade.length; i++) {
        sum = ((sum + sGrade[i][1] / 5));
        //console.log(sum);
    }
    if (sum <= 60) {
        document.getElementsByClassName("result")[0].innerHTML = "F";
    } else if (sum <= 70) {
        document.getElementsByClassName("result")[0].innerHTML = "D";
    } else if (sum <= 80) {
        document.getElementsByClassName("result")[0].innerHTML = "C";
    } else if (sum <= 90) {
        document.getElementsByClassName("result")[0].innerHTML = "B";
    } else {
        document.getElementsByClassName("result")[0].innerHTML = "A";
    }

}