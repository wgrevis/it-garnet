$("CirlceForm").validate({


});


//Prompt for Raduis Value

function calcResults () {


}


// Calculations

function calcDiameter(radius) {
    return 2 * radius
}

function calcCircumference(radius) {
    return 2 * Math.PI * radius
}

function calcArea(radius) {
    return Math.PI * (radius*2)
}


// Function to clear all inputs
function clear() {
    document.getElementById("radius").value = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
}


