ssINS = prompt("Inserisci i secondi da convertire");

unDDinSS = 24 * 60 * 60
unHHinSS = 60 * 60
unMMinSS = 60

//giorni in input
quantitaGiorniInSecondiInseriti = (ssINS / unDDinSS).toFixed(0);
conversioneRisultatoGiorniInSecondi = quantitaGiorniInSecondiInseriti * 60 * 60 * 24;
residuoCalcoloGiorni = ssINS - conversioneRisultatoGiorniInSecondi;


//ore in residuo
quantitaOreInSecondiResidui = (residuoCalcoloGiorni / unHHinSS).toFixed(0);
conversioneRisultatoOreInSecondi = quantitaOreInSecondiResidui * 60 * 60;
residuoCalcoloOre = residuoCalcoloGiorni - conversioneRisultatoOreInSecondi;


//minuti in residuo
quantitaMinutiInSecondiResidui = (residuoCalcoloOre / unMMinSS).toFixed(0);
conversioneRisultatoMinutiInSecondi = quantitaMinutiInSecondiResidui * 60;
residuoCalcoloMinuti = residuoCalcoloOre - conversioneRisultatoMinutiInSecondi;

//controllo risultati

risultatoGiorni = isNaN(parseInt(quantitaGiorniInSecondiInseriti)) ? parseInt(0) : parseInt(quantitaGiorniInSecondiInseriti); 

risultatoOre = isNaN(parseInt(quantitaOreInSecondiResidui)) ? parseInt(0) : parseInt(quantitaOreInSecondiResidui); 

risultatoMinuti = isNaN(parseInt(quantitaMinutiInSecondiResidui)) ? parseInt(0) : parseInt(quantitaMinutiInSecondiResidui); 

risultatoSecondi = isNaN(parseInt(residuoCalcoloMinuti)) ? parseInt(0) : parseInt(residuoCalcoloMinuti);

alert(risultatoGiorni + ":" + risultatoOre + ":" + quantitaMinutiInSecondiResidui + ":" + residuoCalcoloMinuti);

alert(quantitaGiorniInSecondiInseriti + ":" + quantitaOreInSecondiResidui + ":" + quantitaMinutiInSecondiResidui + ":" + residuoCalcoloMinuti);