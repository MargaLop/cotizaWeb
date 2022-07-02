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
main();

function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  
  setTimeout(showTime, 1000);
  
}
showTime();