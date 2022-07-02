function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function main(){
  var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    while(true){
      fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const rate = document.getElementById("rate");
          resultado=JSON.parse(result);
          monedaTxtEur = resultado['data']['rates']['EUR']
          monedaFormateadaEur = parseFloat(monedaTxtEur).toFixed(2)
          rate.textContent  = `1 = ${monedaFormateadaEur}`

          console.log(monedaTxtEur)
        })
        .catch((error) => console.log("error", error));
        await sleep(15 * 1000);
    }
}
main()