async function getResults() {
    "use strict";

    var form = $("#CurrencyForm");

    if (form.valid()) {

        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ToCurrency = document.getElementById("ToCurrency").value;
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;
        var apiKey = "UJfGI1DrjXkaMLG7atmkQZRpkDja9lAZ"
    }

    var myURL = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + ToCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;

    




















































}