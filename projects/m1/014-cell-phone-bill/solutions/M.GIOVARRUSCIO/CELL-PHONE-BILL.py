"""
Un particolare piano telefonico comprende 50 minuti di trasmissione e 50 sms a € 15,00 al mese.
Ogni minuto aggiuntivo di trasmissione costa € 0,25,
mentre gli SMS aggiuntivi costano € 0,15 ciascuno.
Tutte le fatture dei telefoni cellulari includono un addebito aggiuntivo di € 0,44
per supportare i call center del 911 e l'intera fattura (compresa la carica del 911)
è soggetta all'imposta sulle vendite del 5%.
Scrivere un programma che legga il numero di minuti e messaggi di testo utilizzati
in un mese dall'utente.
Visualizza l'addebito base, l'addebito dei minuti aggiuntivi (se presenti),
addebito aggiuntivo per i messaggi di testo (se presente), la tariffa del 911,
le tasse e l'importo totale della fattura.
Visualizzare i costi dei minuti aggiuntivi e dei messaggi di testo solo se l'utente
ha sostenuto costi in queste categorie.
Assicurati che tutti gli addebiti vengano visualizzati utilizzando 2 cifre decimali.
"""
min=int(input("Inserire minuti in un mese:"))
msg=int(input("Inserire numero messaggi in un mese:"))

#Ogni minuto aggiuntivo di trasmissione costa € 0,25
if min>50:
    Cmin=0.25*(min-50)
#SMS aggiuntivi costano € 0,15 ciascuno
if msg>50:
    Cmsg=0.15*(msg-50)
#50 minuti di trasmissione e 50 sms a € 15,00 al mese.
#fatture dei telefoni cellulari includono un addebito aggiuntivo di € 0,44 per supportare
# i call center del 911
#'intera fattura (compresa la carica del 911) è soggetta all'imposta sulle vendite del 5%
fatt=(15+Cmin+Cmsg+0.44)*1.05
print('{:5.2f}$'.format(fatt))