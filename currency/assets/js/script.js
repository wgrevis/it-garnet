async function getResults() {
    "use strict";
  
    var form = $("#CurrencyForm");
  
    if (form.valid()) {
      var baseCurrency = document.getElementById("BaseCurrency").value;
      var toCurrency = document.getElementById("ToCurrency").value;
      var fromDate = document.getElementById("FromDate").value;
      var toDate = document.getElementById("ToDate").value;
      var apiKey = "UJfGI1DrjXkaMLG7atmkQZRpkDja9lAZ";
    }
  
    var myURL =
      "https://api.polygon.io/v2/aggs/ticker/C:" +
      baseCurrency +
      toCurrency +
      "/range/1/day/" +
      fromDate +
      "/" +
      toDate +
      "?unadjusted=false&sort=asc&limit=32&apiKey=" +
      apiKey;
  
    var msg2Object = await fetch(myURL);
  
    if (msg2Object.status >= 200 && msg2Object.status <= 299) {
      var msg2JSONText = await msg2Object.text();
      var msg2 = JSON.parse(msg2JSONText);
      var currencyDate = [];
      var currencyValue = [];
      var numdays = msg2.results.length;
  
      if (numdays > 0) {
        for (let i = 0; i < numdays; i++) {
          currencyValue[i] = msg2.results[i].c;
          var tempdate = new Date(msg2.results[i].t);
          currencyDate[i] = tempdate.toLocaleDateString();
        }
      }
  
      let ctx0 = document.getElementById("chartjs");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: currencyDate,
          datasets: [
            {
              label: "1 " + baseCurrency + " to " + toCurrency,
              data: currencyValue,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: baseCurrency + " to " + toCurrency + " : Currency Conversion History ",
          },
        },
      });
    } else {
      alert("Currency Not Found - Status: " + msg2Object.status);
      return;
    }
  }
  
  function ClearForm() {
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("ToCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("BaseCurrencyError").innerHTML = "";
    document.getElementById("ToCurrencyError").innerHTML = "";
    document.getElementById("FromDateError").innerHTML = "";
    document.getElementById("ToDateError").innerHTML = "";
  
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext("2d");
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
  }