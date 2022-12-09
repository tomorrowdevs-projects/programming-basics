let bottigliePiccole = prompt("Quante bottiglie da ≤1 litro hai?");
let bottiglieGrandi = prompt("Quante bottiglie da >1 litro hai?");

convBottPicc = bottigliePiccole * 0.10;
convBottGran = bottiglieGrandi * 0.25;
totRImborso = convBottPicc + convBottGran;

alert("Rimborso totale di " + totRImborso + "$");