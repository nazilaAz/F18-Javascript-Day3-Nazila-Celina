let temp;

temp = Math.ceil(Math.random() * 40) * (Math.round(Math.random()) ? 1 : -1);
//console.log(temp);

if (temp <= 0) {
    console.log("Freezing");
    document.getElementsByClassName("imgTemp")[0].src = "img/cloudy-37012_1280.png";
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempDescription").innerHTML = "The weather is Freezing";

} else if (0 < temp && temp < 8) {
    console.log("Cold");
    document.getElementsByClassName("imgTemp")[0].src = "img/sleet-153216_1280.png";
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempDescription").innerHTML = "The weather is Cold";
} else if (temp >= 8 && temp < 15) {
    console.log("cool");
    document.getElementsByClassName("imgTemp")[0].src = "img/cloud-37011_1280.png";
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempDescription").innerHTML = "The weather is cool";
} else if (temp >= 15 && temp < 29) {
    console.log("warm");
    document.getElementsByClassName("imgTemp")[0].src = "img/sun-159392_1280.png";
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempDescription").innerHTML = "The weather is warm";
} else {
    console.log("Hot");
    document.getElementsByClassName("imgTemp")[0].src = "img/weather-7234860_1280.png";
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempDescription").innerHTML = "The weather is Hot";
}


//Chose Random City
let cityArray = ["Vienna", "London", "New York", "Tokyo"];

document.getElementsByClassName("cityTemp")[0].innerHTML =
    cityArray[Math.floor(Math.random() * 4)];

//get Date
let today = new Date();
document.getElementById("date").innerHTML = today.toDateString();