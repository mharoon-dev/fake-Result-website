const input = document.getElementById("input")


function searchBtn() {
    if (input.value == "202848") {
        window.location = "./results/result 1.html"
    } else if (input.value == "202854" ) {
        window.location = "./results/result 2.html"
    } else if (input.value == "202849" ) {
        window.location = "./results/result 3.html"
    } else if (input.value == "253573" ) {
        window.location = "./results/result 4.html"
    } //else if (input.value == "061939" ) {
        //window.location = "./results/result 5.html"}
     else {
        alert("Write the correct roll number")
    }
}


  