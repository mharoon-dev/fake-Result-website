const input = document.getElementById("input")


function searchBtn() {
    if (input.value == "202848") {
        window.location = "./results/result 1.html"
    } else if (input.value == "202849" ) {
        window.location = "./results/result 2.html"
    } else if (input.value == "202854" ) {
        window.location = "./results/result 3.html"
    } else if (input.value == "253573" ) {
        window.location = "./results/result 4.html"
    } else if (input.value == "200624" ) {
        window.location = "./results/result 6.html"}
     else {
        alert("Write the correct roll number")
    }
}


  