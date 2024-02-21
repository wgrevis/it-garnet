function calculate() {
    "use strict";


    // get a reference to the form - Use the ID of the form
    var form = $( "#AJAXForm" );

    // If all of the form elements are valid, the get the form values
    if (form.valid()) {

          // From Value 
        var FromValue = document.getElementById("FromValue").value;
        
            // From Unit
        var FromUnit;
            if (document.getElementById("fromcm").checked) {
            FromUnit = document.getElementById("fromcm").value;
        }
            if (document.getElementById("frommeter").checked) {
            FromUnit = document.getElementById("frommeter").value;
        }
            if (document.getElementById("fromkilometer").checked) {
            FromUnit = document.getElementById("fromkilometer").value;
        }
            if (document.getElementById("frominch").checked) {
            FromUnit = document.getElementById("frominch").value;
        }
            if (document.getElementById("fromfeet").checked) {
            FromUnit = document.getElementById("fromfeet").value;
        }
            if (document.getElementById("fromyard").checked) {
            FromUnit = document.getElementById("fromyard").value;
        }
            if (document.getElementById("frommile").checked) {
            FromUnit = document.getElementById("frommile").value;
        }

         // To Unit  
        var ToUnit;
            if (document.getElementById("tocentimeter").checked) {
                ToUnit = document.getElementById("tocentimeter").value;
            }
            if (document.getElementById("tometer").checked) {
                ToUnit = document.getElementById("tometer").value;
            }
            if (document.getElementById("tokilometer").checked) {
                ToUnit = document.getElementById("tokilometer").value;
            }
            if (document.getElementById("toinch").checked) {
                ToUnit = document.getElementById("toinch").value;
            }
            if (document.getElementById("tofeet").checked) {
                ToUnit = document.getElementById("tofeet").value;
            }
            if (document.getElementById("toyard").checked) {
                ToUnit = document.getElementById("toyard").value;
            }
            if (document.getElementById("tomile").checked) {
                ToUnit = document.getElementById("tomile").value;
            }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

        /* Calculations */

async function CalculateResult(FromValue, FromUnit, ToUnit) {
    var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

    myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();

    document.getElementById("ToValue").innerHTML = myResult;
}


    /* Clear Form */

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("ToValue").innerHTML = "";
    document.getElementById("fromcm").checked = false;
    document.getElementById("frommeter").checked = false;
    document.getElementById("fromkilometer").checked = false;
    document.getElementById("frominch").checked = false;
    document.getElementById("fromfeet").checked = false;
    document.getElementById("fromyard").checked = false;
    document.getElementById("frommile").checked = false;
    document.getElementById("tocentimeter").checked = false;
    document.getElementById("tometer").checked = false;
    document.getElementById("tokilometer").checked = false;
    document.getElementById("toinch").checked = false;
    document.getElementById("tofeet").checked = false;
    document.getElementById("toyard").checked = false;
    document.getElementById("tomile").checked = false;
}

/* Form Validation */
$( "#AJAXFrom" ).validate({
 
});