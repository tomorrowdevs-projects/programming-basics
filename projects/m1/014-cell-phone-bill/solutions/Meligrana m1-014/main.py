if __name__=='__main__':
    chiamate=int(input("Inserisci il numero di chiamate in un mese "))
    messaggi=int(input("Inserisci il numero di messaggi in un mese "))
    if chiamate<=50 and messaggi<=50:
        tassa=(15+0.44)*0.05
        costo=15+tassa
        print(f"tariffa base=15.00 euro     tassa 911=0.44 euro      tassa totale={tassa:.2f} euro       costo totale={costo:.2f} euro")
    else:
        chiamate_aggiuntive=chiamate-50
        messaggi_aggiuntivi=messaggi-50
        tassa = (15 + 0.44+chiamate_aggiuntive*0.25+messaggi_aggiuntivi*0.15) * 0.05
        costo = 15 + tassa
        print(f"tariffa base=15.00 euro    chiamate aggiuntive={chiamate_aggiuntive}    messaggi in più={messaggi_aggiuntivi}    tassa 911=0.44 euro      tassa totale={tassa:.2f} euro       costo totale={costo:.2f} euro")