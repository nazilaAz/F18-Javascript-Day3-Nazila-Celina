for (let i = 1; i <= 100; i++) {
    // document.getElementsByClassName("container")[0].innerHTML += i + "<br>";

    if (i % 3 == 0) {
        document.getElementsByClassName("container")[0].innerHTML +=
            "FIZZ" + "<br>";
    } else if (i % 5 == 0) {
        document.getElementsByClassName("container")[0].innerHTML +=
            "BUZZ" + "<br>";

    } else {
        document.getElementsByClassName("container")[0].innerHTML +=
            i + "<br>";
    }
}