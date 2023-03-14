#Convesrione di giorni, ore, minuti in secondi#
day =int ( input ("inserisci il numero di giorni:"))
hour=int (input ("inserisci il numero di ore :"))
minute=int (input("inserisci il numero di minuti :"))
valore_in_secondi= ((day* 24*3600)+ (hour*3600)+(minute*60))
print (  day,"giorni", hour,"ore", minute,"minuti","corripsondono a :",valore_in_secondi,"secondi")