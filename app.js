const input = document.getElementById("input")


function searchBtn() {
    if (input.value == "202848") {
        window.location = "./result page/results/result 1.html"
    } else if (input.value == "202854" ) {
        window.location = "./result page/results/result 2.html"
    } else if (input.value == "202849" ) {
        window.location = "./result page/results/result 3.html"
    } else if (input.value == "253573" ) {
        window.location = "./result page/results/result 4.html"
    } else if (input.value == "061939" ) {
        window.location = "./result page/results/result 5.html"
    } else {
        alert("Write the correct roll number")
    }
}


  