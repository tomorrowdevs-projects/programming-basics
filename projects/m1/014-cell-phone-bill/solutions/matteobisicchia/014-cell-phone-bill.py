PIANO=float (15.00)
EMERG= float(0.44)
TAX= float(1.05)
minutes =input("inserisci il numero di minuti : ")
messages =input("inserisci il numerodi messaggi : ")
if (int(minutes)<=0 and int(minutes)>50  ):
	 mm=PIANO
else:
	mm=(PIANO + (0.25 * float(int(minutes)-50)))

if (int(messages)<=0 and int(messages)>50  ):
	 sms=0.00
else:
	sms=(0.15 * float(int(messages)-50))
valtx= float((TAX-1)*100)
total= float(TAX*(EMERG +mm +sms))
print ("il costo totale è:\n" +"costo piano telefonico 50 minuti e messaggi |" +str('%.2f' %PIANO) +" euro|\n" + "costo minuti adizionali | "
	   +str('%.2f' %mm) +" euro |\n" +"costo sms adizionali | "+str('%.2f' %sms) +" euro |\n" + "costo 911 |"+ str('%.2f' %EMERG) +" euro|\n" 
	   + "la percentuale di tasse è | "+ str('%.2f' %valtx) +"% |\n"+ "il totale è | "+ str('%.2f' %total)+" euro |")