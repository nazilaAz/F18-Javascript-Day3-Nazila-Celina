let Students = ["John", "Jane"];
let MathGrades = [70, 85];
let sName;
var resultName = prompt("Enter Your Name");
var resultMath;


for (let index in Students) {
    if (resultName == Students[index]) {
        document.getElementsByClassName("container")[0].innerHTML =
            `${Students[index]} has reached ${MathGrades[index]} points in Math this season.`;

    }
}