function add_time(orarioUtente, tempoAggiuntivo, giornoPartenza) {
    let partiOrario = orarioUtente.split(/[:\s]/);
    let ora = parseInt(partiOrario[0]);
    let minuto = parseInt(partiOrario[1]);
    let periodo = partiOrario[2];

    if (periodo === "PM" && ora < 12) {
      ora = ora + 12;
    } else if (periodo === "AM" && ora === 12) {
      ora = 0;
    }
  
    let myData = new Date();
    myData.setHours(ora, minuto, 0, 0);
  
    let partiTempoAggiuntivo = tempoAggiuntivo.split(":");
    let oreAggiuntive = parseInt(partiTempoAggiuntivo[0]);
    let minutiAggiuntivi = parseInt(partiTempoAggiuntivo[1]);
  
    myData.setHours(myData.getHours() + oreAggiuntive, myData.getMinutes() + minutiAggiuntivi);
  
    let giorniSettimana = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
 
    let indiceGiornoPartenza = giorniSettimana.findIndex(giorno => giorno.toLowerCase() === giornoPartenza.toLowerCase());
  

    if (indiceGiornoPartenza !== -1) {
      let giornoPartenzaData = new Date(myData);
      giornoPartenzaData.setDate(myData.getDate() - myData.getDay() + indiceGiornoPartenza);
      if (giornoPartenzaData > myData) {
        myData.setDate(myData.getDate() + 7); 
      }
    }
    return myData;
  }
  
  
  function formatTime(time) {
    let ora = time.getHours();  
    let minuto = time.getMinutes(); 
    let periodo = "AM"; 
  
    if (ora >= 12) {  
      periodo = "PM"; 
      if (ora > 12) { 
        ora = ora - 12;  
      }
    }
  
    let formattedTime = ora.toString().padStart(2, "0") + ":" + minuto.toString().padStart(2, "0") + " " + periodo;
    
    return formattedTime;  
  }
  
  function formatOutput(time, giorniPassati) {
    let output = formatTime(time); 
  
    if (giorniPassati === 0) {
      return output;
    } else if (giorniPassati === 1) {
      return output + " (Next day)";
    } else {
      return output + " (" + giorniPassati + " days later)";
    }
  }
  
  function program() {
    let orarioUtente = prompt("Inserisci un orario nel formato h:mm AM/PM");
    let tempoAggiuntivo = prompt("Inserisci un'ora aggiuntiva nel formato h:mm");
    let giornoPartenza = prompt("Inserisci un giorno di partenza (es. Lunedì)");
    let newTime = add_time(orarioUtente, tempoAggiuntivo, giornoPartenza);  
    let oggi = new Date();  
    oggi.setHours(0, 0, 0, 0);  
    let giorniPassati = Math.floor((newTime - oggi) / (1000 * 60 * 60 * 24));  
    let outputElement = document.getElementById('output');  
    if (outputElement) { 
      outputElement.innerText = formatOutput(newTime, giorniPassati); 
    } else {
      console.error("L'elemento 'output' non esiste nella pagina HTML.");  
    }
  }
  