$("CirlceForm").validate({


});


//Prompt for Raduis Value

function displayResults() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
        document.getElementById("diameter").innerHTML = ""
        document.getElementById("circumference").innerHTML = ""
        document.getElementById("area").innerHTML = ""

         var radius; // radius
         var diameter; // diameter
         var area; // area
         var circumference; // circumference

         // read in the legs as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radius = parseFloat( radius ); 

         // calculate the area, radius, circumference
         area = calcArea(radius);
         circumference = calcCircumference(radius);
         diameter = calcDiameter(radius);

         // display the results
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("circumference").innerHTML = circumference.toString();
         document.getElementById("area").innerHTML = area.toString();
    }
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


// Display Results

// Function to clear all inputs
function clear() {
    document.getElementById("radius").value = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
}


