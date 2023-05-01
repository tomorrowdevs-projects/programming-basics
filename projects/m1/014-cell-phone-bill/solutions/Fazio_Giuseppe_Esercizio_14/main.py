"""
Cell Phone Bill
A particular cell phone plan includes 50 minutes of air time and 50 text messages
for € 15.00 a month. Each additional minute of air time costs € 0.25,
while additional text messages cost € 0.15 each.
All cell phone bills include an additional charge of € 0.44 to support 911 call centers,
and the entire bill (including the 911 charge) is subject to 5 percent sales tax.
Write a program that reads the number of minutes and text messages used in a month from
the user. Display the base charge, additional minutes charge (if any),
additional text message charge (if any), the 911 fee, tax and total bill amount.
Only display the additional minute and text message charges if the user incurred costs
in these categories. Ensure that all of the charges are displayed using 2 decimal places

"""
#    ************** TARIFFE *****************
# Tariffa base
BASE = 15.00
# Costo extra al minuto di telefonata
COST_MIN = 0.25
# Costo extra per ogni SMS
COST_SMS = 0.15
#  support 911 call centers
COST_911 = 0.44
# 5 percent sales tax
SALES_TAX= 5
# Totali minuti  e SMS compresi nella tariffa base
TOT_MINUTI = 50
TOT_SMS= 50

min_aggiuntivi: int = 0
costo_min_agg: int= 0
SMS_aggiuntivi: int = 0
costo_SMS_aggiuntivi: int = 0
costo_totale: int = 0

#   ***************  INPUT ************************
min = int(input("inserisci i minuti utilizzati = "))
messaggi = int(input("inserisci i messaggi utilizzati ="))

# verifica minuti e messaggi aggiuntivi

min_aggiuntivi= int(min - TOT_MINUTI)
SMS_aggiuntivi= int(messaggi - TOT_SMS)

if min_aggiuntivi > 0:
    print(" minuti aggiuntivi = ", min_aggiuntivi)
    costo_min_agg= min_aggiuntivi*COST_MIN
    print (" costo minuti ag = ",costo_min_agg)

if SMS_aggiuntivi > 0:
    print (" SMS aggiuntivi = ",SMS_aggiuntivi)
    costo_SMS_aggiuntivi = SMS_aggiuntivi * COST_SMS
    print(" costo SMS aggiuntivi= ",costo_SMS_aggiuntivi)

costo_totale= (BASE+ costo_min_agg+costo_SMS_aggiuntivi+COST_911)
costo_totale += costo_totale*5/100
print(" importo da pagare = {:12.2f}= euro".format(costo_totale))



