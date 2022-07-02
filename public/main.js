var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const rate = document.getElementById("rate");
      resultado=JSON.parse(result);
      monedaTxtEur = resultado['data']['rates']['EUR']
      monedaFormateadaEur = parseFloat(monedaTxtEur).toFixed(2)
      rate.textContent  = `1 = ${monedaFormateadaEur}`

    })
    .catch((error) => console.log("error", error));
