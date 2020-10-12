function colorChange() {
    switch (document.getElementById('productColor').value) {
        case "red": {
            $("#colorBlock").css("background-color", "red");
            break;
        }
        case "blue": {
            $("#colorBlock").css("background-color", "blue");
            break;
        }
        case "green": {
            $("#colorBlock").css("background-color", "green");
            break;
        }
        case "pink": {
            $("#colorBlock").css("background-color", "pink");
            break;
        }
        case "black": {
            $("#colorBlock").css("background-color", "black");
            break;
        }
        default: $("#colorBlock").css("background-color", "gray");
    }
}
colorChange();
document.getElementById('productColor').addEventListener("change", colorChange);