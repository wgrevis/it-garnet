function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#CalcForm" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AddSign").checked) {
            operator = document.getElementById("AddSign").value;
        }
        if (document.getElementById("AddSign").checked) {
            operator = document.getElementById("AddSign").value;
        }
        if (document.getElementById("AddSign").checked) {
            operator = document.getElementById("AddSign").value;
        }
        if (document.getElementById("AddSign").checked) {
            operator = document.getElementById("AddSign").value;
        }

        
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AddSign").checked = false;
    document.getElementById("SubtractSign").checked = false;
    document.getElementById("MultiSign").checked = false;
    document.getElementById("DivideSign").innerHTML = "";
    document.getElementById("OpError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#CalcForm" ).validate({
 
});